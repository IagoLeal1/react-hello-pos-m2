export default function OnlineOffline({ isOnline = true }) {
  const className = isOnline ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800';
  return (
    <span className={`${className} p-1 rounded`}>
      {isOnline ? 'Online' : 'Offline'}
    </span>
  );
}
