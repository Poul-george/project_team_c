'use client'

import { useState, useEffect } from 'react'
import { Slider } from "./components/ui/slider"
// import { Button } from "./components/ui/button"
// import Link from 'next/link'

export default function VotePage() {
  const [votes, setVotes] = useState({
    food: 0,
    nature: 0,
    activity: 0,
    interest: 0
  })

  const [remainingPoints, setRemainingPoints] = useState(10)
  const [characterMood, setCharacterMood] = useState('normal')

  useEffect(() => {
    const totalVotes = Object.values(votes).reduce((sum, vote) => sum + vote, 0)
    setRemainingPoints(10 - totalVotes)
    setCharacterMood(totalVotes === 0 ? 'sad' : totalVotes === 10 ? 'happy' : 'normal')
  }, [votes])

  const handleVoteChange = (category: keyof typeof votes, value: number[]) => {
    const newValue = value[0]
    const oldValue = votes[category]
    const pointDifference = newValue - oldValue

    if (remainingPoints - pointDifference >= 0) {
      setVotes(prev => ({ ...prev, [category]: newValue }))
    }
  }

  const characterFace = {
    sad: '(´• ᵕ •̥`)',
    normal: '(• ᵕ •)',
    happy: '(≧◡≦)'
  }

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        {/* <div className="text-6xl mb-2">{characterFace[characterMood]}</div> */}
        <h2 className="text-xl font-semibold text-pink-600">旅行のコンセプトを作成</h2>
        <p className="text-sm text-gray-600 mt-2">
          しおりちゃんと一緒に、素敵な旅行プランを立てましょう！
        </p>
      </div>
      <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        {Object.entries(votes).map(([category, value]) => (
          <div key={category} className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor={category} className="text-lg font-medium text-pink-600">
                {category === 'food' && '🍣 食'}
                {category === 'nature' && '🌳 自然'}
                {category === 'activity' && '🏄‍♀️ アクティビティ'}
                {category === 'interest' && '🎨 趣味'}
              </label>
              <span className="text-2xl text-pink-500 font-bold">{value}</span>
            </div>
            <Slider
              // id={category}
              min={0}
              max={5}
              step={1}
              // value={[value]}
              // onValueChange={(newValue) => handleVoteChange(category as keyof typeof votes, newValue)}
              className="[&_[role=slider]]:bg-pink-500 [&_[role=slider]]:border-pink-500 [&_[role=slider]]:shadow-pink-500/50"
            />
          </div>
        ))}
      </div>
      <div className="text-center text-lg font-medium">
        残りポイント: <span className="text-pink-500 font-bold text-2xl">{remainingPoints}</span>
      </div>
      {/* <Link href="/destinations" passHref>
        <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full text-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105">
          旅程を作成する
        </Button>
      </Link> */}
    </div>
  )
}