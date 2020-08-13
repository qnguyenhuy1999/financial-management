import React from "react";

import {
  ListTransactionContainer,
  OneDayContainer,
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

export default function ListTransaction() {
  return (
    <ListTransactionContainer>
      <OneDayContainer>
        <Header>
          <TagPHeader>Aug 10, 2020</TagPHeader>
          <div className="amount">
            <TagSpanHeader>-5.00 USD</TagSpanHeader>
          </div>
        </Header>
        <div className="content">
          <TransactionItem>
            <Title>
              <Icon>
                <TagI className="fas fa-utensils" />
              </Icon>
              <TagSpanName>Food & Drink</TagSpanName>
            </Title>
            <div className="amount">
              <TagSpanAmount>-5.00 USD</TagSpanAmount>
            </div>
          </TransactionItem>
          <TransactionItem>
            <Title>
              <Icon>
                <TagI className="fas fa-utensils" />
              </Icon>
              <TagSpanName>Food & Drink</TagSpanName>
            </Title>
            <div className="amount">
              <TagSpanAmount>-5.00 USD</TagSpanAmount>
            </div>
          </TransactionItem>
        </div>
      </OneDayContainer>
      <OneDayContainer>
        <Header>
          <TagPHeader>Aug 10, 2020</TagPHeader>
          <div className="amount">
            <TagSpanHeader>-5.00 USD</TagSpanHeader>
          </div>
        </Header>
        <div className="content">
          <TransactionItem>
            <Title>
              <Icon>
                <TagI className="fas fa-utensils" />
              </Icon>
              <TagSpanName>Food & Drink</TagSpanName>
            </Title>
            <div className="amount">
              <TagSpanAmount>-5.00 USD</TagSpanAmount>
            </div>
          </TransactionItem>
          <TransactionItem>
            <Title>
              <Icon>
                <TagI className="fas fa-utensils" />
              </Icon>
              <TagSpanName>Food & Drink</TagSpanName>
            </Title>
            <div className="amount">
              <TagSpanAmount>-5.00 USD</TagSpanAmount>
            </div>
          </TransactionItem>
        </div>
      </OneDayContainer>
    </ListTransactionContainer>
  );
}
