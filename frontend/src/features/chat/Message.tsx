
export const Message = ({message}) => {
  return (
    <div
    key={message.id}
    className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
  >
    <div
      className={`max-w-xs px-4 py-2 rounded-lg ${
        message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }`}
    >
      <p>{message.content}</p>
      <p className="text-xs mt-1 text-gray-400">{message.time}</p>
    </div>
  </div>
  )
}
