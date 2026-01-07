'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('위치 확인 중…');

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus('위치 기능을 지원하지 않는 기기입니다');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        setStatus('지금 이 시간 이후로 가까운 파크골프장을 추천해드릴까요?');
      },
      () => {
        setStatus('위치 허용이 필요합니다');
      }
    );
  }, []);

  return (
    <main style={{ padding: 24, fontSize: 22, lineHeight: 1.5 }}>
      <h1 style={{ fontSize: 28, marginBottom: 24 }}>
        🏌️ 파크골프 AI 추천
      </h1>

      <p style={{ marginBottom: 32 }}>
        {status}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <button style={btnStyle}>예</button>
        <button style={btnStyle}>날짜 선택</button>
      </div>
    </main>
  );
}

const btnStyle = {
  padding: '20px',
  fontSize: '20px',
  borderRadius: '12px',
  border: 'none',
  background: '#000',
  color: '#fff',
};
