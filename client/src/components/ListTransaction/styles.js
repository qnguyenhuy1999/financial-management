import styled from "styled-components";

export const ListTransactionContainer = styled.div`
  background: #fff;
  padding: 10px 20px;
  border-radius: 0.25rem;
`;

export const OneDayContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #e5ebee;
  &:first-child {
    padding-bottom: 10px !important;
  }
  &:last-child {
    padding-top: 10px !important;
    border-bottom: none;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TagPHeader = styled.p`
  font-size: 16px;
  font-weight: 600;
  word-spacing: -2px;
`;

export const TagSpanHeader = styled.span`
  color: #93a1aa;
  font-size: 16px;
  font-weight: 600;
`;

export const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  padding: 9px 13px;
  background: #ffa801;
  border-radius: 50%;
  margin-right: 7px;
`;

export const TagI = styled.i`
  font-size: 18px;
  color: #fff;
`;

export const TagSpanName = styled.span`
  color: #324c5b;
  font-size: 15px;
`;

export const TagSpanAmount = styled.span`
  color: #f14c52;
  font-weight: 700;
`;
