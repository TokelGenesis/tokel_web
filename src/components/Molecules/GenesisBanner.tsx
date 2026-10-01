import React from 'react';
import styled from '@emotion/styled';
import breakpoints from '../../styles/breakpoints';
import links from 'data/links';

// Tokel Genesis: the community continuation's welcome, shown first on the home page.
const Wrap = styled.section`
  position: relative;
  z-index: 3;
  max-width: 980px;
  margin: 2.5rem auto 0;
  padding: 2rem 2.25rem;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255, 140, 50, 0.16), rgba(120, 90, 255, 0.16));
  border: 1px solid rgba(255, 170, 90, 0.45);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
  color: #f3f4fb;
  @media (max-width: ${breakpoints.mobile}) {
    margin: 1rem 1rem 0;
    padding: 1.4rem 1.2rem;
  }
`;

const Kicker = styled.p`
  margin: 0 0 0.4rem;
  letter-spacing: 0.12em;
  font-size: 0.85rem;
  color: #ffb36b;
`;

const Title = styled.h2`
  margin: 0 0 1rem;
  font-size: 2.2rem;
  line-height: 1.2;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.6rem;
  }
  span {
    color: #ffb36b;
  }
`;

const Text = styled.p`
  margin: 0 0 0.7rem;
  text-wrap: pretty; /* no lone last character on a line */
  line-break: strict;
  font-size: 1.05rem;
  line-height: 1.7;
  &.en {
    color: #c7cbe0;
    font-size: 0.95rem;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.2rem;
  a {
    display: inline-block;
    padding: 0.65rem 1.2rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid rgba(255, 179, 107, 0.7);
    color: #ffb36b;
  }
  a.primary {
    background: #ff9a3c;
    color: #13182a;
    border-color: #ff9a3c;
  }
`;

const GenesisBanner = () => (
  <Wrap id="genesis">
    <Kicker>TOKEL GENESIS｜Γένεσις</Kicker>
    <Title>
      創世紀・新篇章 <span>A new chapter for Tokel</span>
    </Title>
    <Text>
      Tokel Genesis 是 TokelPlatform 的社群延續。原團隊的貢獻永遠保留在歷史中；所有舊錢包、代幣、餘額完全相容，鏈上資料一點都沒變。
    </Text>
    <Text className="en">
      Tokel Genesis is a community continuation of TokelPlatform. The original team&apos;s contributions remain in the
      history forever. All existing wallets, tokens and balances are fully compatible, and nothing on-chain has changed.
    </Text>
    <Text>
      同一條鏈、同一個 TKL：區塊鏈已恢復出塊，你的錢包、代幣與 NFT 都還在，不需要轉換或兌換。
    </Text>
    <Text className="en">
      Same chain, same TKL: the chain is producing blocks again, and your wallet, tokens and NFTs are all still there.
      Nothing to migrate or swap.
    </Text>
    <Actions>
      <a className="primary" href={links.github} target="_blank" rel="noreferrer">
        GitHub：TokelGenesis
      </a>
      <a href={links.explorer} target="_blank" rel="noreferrer">
        區塊瀏覽器 Explorer
      </a>
      <a href={links.mailContact}>聯絡我們 Contact</a>
    </Actions>
  </Wrap>
);

export default GenesisBanner;
