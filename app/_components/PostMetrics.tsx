'use client'

import { ThumbsUp, MessageSquare, Share } from 'lucide-react'

interface PostMetricsProps {
  likes: number
  comments: number
  shares: number
}

export function PostMetrics({ likes, comments, shares }: PostMetricsProps) {
  const formatNumber = (num: number) => {
    return num >= 1000 ? `${Math.floor(num / 1000)}k` : num.toString()
  }

  return (
    <div className="flex items-center gap-12 mt-4">
      <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <ThumbsUp className="w-5 h-5" />
        <span className="text-sm">{formatNumber(likes)}</span>
      </button>
      <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <MessageSquare className="w-5 h-5" />
        <span className="text-sm">{formatNumber(comments)}</span>
      </button>
      <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <Share className="w-5 h-5" />
        <span className="text-sm">{formatNumber(shares)}</span>
      </button>
    </div>
  )
}

