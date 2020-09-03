import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import classNames from "classnames";

import {
  ListTransactionContainer,
  DayContainer,
  Header,
  TagPHeader,
  TransactionItem,
  Title,
  Icon,
  TagI,
  TagSpanName,
  TagSpanAmount,
} from "./styles";
import { formatMoney } from "../../commons/helper";

function PeriodTransaction(props) {
  const { type, transaction } = props;
  const totalTransactions = [
    ...transaction.monthTransactions,
    ...transaction.dayTransactions,
  ];

  const transactions = totalTransactions.filter(
    (item) => item.category.type === type,
  );

  return (
    <ListTransactionContainer>
      <DayContainer>
        {transactions.length > 0 &&
          transactions.map((transaction, index) => (
            <div className="pd-2" key={index}>
              {transaction.date && (
                <Header>
                  <TagPHeader>
                    {moment(transaction.date).format("YYYY-MM-DD")}
                  </TagPHeader>
                </Header>
              )}
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

export default connect(mapStateToProps, null)(PeriodTransaction);
