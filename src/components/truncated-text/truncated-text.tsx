'use client';

import { useState } from 'react';

interface TruncatedTextProps {
  text: string;
  maxLength?: number;
}

export default function TruncatedText({ text, maxLength = 100 }: TruncatedTextProps) {
  const [expanded, setExpanded] = useState(false);
  const isTruncated = text.length > maxLength;

  if (!isTruncated) {
    return <span>{text}</span>;
  }

  const displayText = expanded ? text : text.slice(0, maxLength) + '...';

  return (
    <span>
      {displayText}{' '}
      <button
        onClick={() => setExpanded(!expanded)}
        className={'text-white bg-transparent border-0 cursor-pointer underline'}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </span>
  );
}
