interface CirclePingProps {
  status: boolean
}

const CirclePing = ({ status }: CirclePingProps) => {
  return (
    <div className={`flex items-center justify-center`}>
      <div
        className={`absolute size-4 animate-ping rounded-full ${status ? 'bg-green-500' : 'bg-red-500'}`}
      />
      <div className={`size-4 rounded-full ${status ? 'bg-green-500' : 'bg-red-500'}`} />
    </div>
  )
}

export default CirclePing
