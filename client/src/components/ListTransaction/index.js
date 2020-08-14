import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import classNames from "classnames";

import {
  ListTransactionContainer,
  MonthContainer,
  DayContainer,
  Header,
  TagPHeader,
  TagSpanHeader,
  TransactionItem,
  Title,
  Icon,
  TagI,
  TagSpanName,
  TagSpanAmount,
} from "./styles";
import { formatMoney } from "../../commons/helper";

function ListTransaction(props) {
  const { transaction } = props;

  const calcTotalMonth = () => {
    let total = transaction.monthTransactions.reduce((result, item) => {
      return item.category.type === "income"
        ? (result += item.amount)
        : (result -= item.amount);
    }, 0);

    return formatMoney(total > 0 ? total : -total);
  };

  return (
    <ListTransactionContainer>
      <MonthContainer>
        <Header>
          <TagPHeader>Month</TagPHeader>
          <div className="amount">
            <TagSpanHeader>{calcTotalMonth()} VND</TagSpanHeader>
          </div>
        </Header>
        {transaction.monthTransactions.length > 0 &&
          transaction.monthTransactions.map((transaction, index) => (
            <div className="content" key={index}>
              <TransactionItem>
                <Title>
                  <Icon
                    style={{
                      background: transaction.category.icon.background,
                    }}
                  >
                    <TagI className={transaction.category.icon.class} />
                  </Icon>
                  <TagSpanName>{transaction.category.name}</TagSpanName>
                </Title>
                <div className="amount">
                  <TagSpanAmount
                    className={classNames({
                      income: transaction.category.type === "income",
                    })}
                  >
                    {transaction.category.type === "expenses"
                      ? `- ${formatMoney(transaction.amount)}`
                      : `+ ${formatMoney(transaction.amount)}`}{" "}
                    VND
                  </TagSpanAmount>
                </div>
              </TransactionItem>
            </div>
          ))}
      </MonthContainer>

      <DayContainer>
        {transaction.dayTransactions.length > 0 &&
          transaction.dayTransactions.map((transaction, index) => (
            <div className="pd-2" key={index}>
              <Header>
                <TagPHeader>
                  {moment(transaction.date).format("YYYY-MM-DD")}
                </TagPHeader>
              </Header>
              <div className="content">
                <TransactionItem>
                  <Title>
                    <Icon
                      style={{
                        background: transaction.category.icon.background,
                      }}
                    >
                      <TagI className={transaction.category.icon.class} />
                    </Icon>
                    <TagSpanName>{transaction.category.name}</TagSpanName>
                  </Title>
                  <div className="amount">
                    <TagSpanAmount
                      className={classNames({
                        income: transaction.category.type === "income",
                      })}
                    >
                      {transaction.category.type === "expenses"
                        ? `- ${formatMoney(transaction.amount)}`
                        : `+ ${formatMoney(transaction.amount)}`}{" "}
                      VND
                    </TagSpanAmount>
                  </div>
                </TransactionItem>
              </div>
            </div>
          ))}
      </DayContainer>
    </ListTransactionContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction,
  };
};

export default connect(mapStateToProps, null)(ListTransaction);
