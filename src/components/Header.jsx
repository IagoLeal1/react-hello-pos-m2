export function Header({ children, size, isOnline = true }) {
  let fontSize = 'text-xl';

  if (size === 'large') {
    fontSize = 'text-2xl';
  }

  const className = isOnline ? 'bg-green-300' : 'bg-red-300';

  return (
   <header>
     <div className={`${className} mx-auto p-4`}>
      <h1 className={`text-center font-semibold ${fontSize}`}>{children}</h1>
    </div>
   </header>
  );
}
