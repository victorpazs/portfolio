type CardProps = {
  title: string;
  desc?: string;
  img: string;
};

export default function Card({ title, desc, img }: CardProps) {
  return (
    <div className="relative transition-all hover:w-32  h-[32rem] items-end justify-start overflow-hidden rounded-xl  text-center text-gray-700">
      <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
        <div className="to-bg-[#000]-10 absolute inset-0 h-full w-full bg-gradient-to-t from-[#000]/80 via-[#000]/50"></div>
      </div>
      <div className="relative text-left p-6 px-2">
        <h2 className="text-2xl font-medium">{title}</h2>
        <h5 className="mb-4 block s text-xl  text-gray-400">{desc}</h5>
      </div>
    </div>
  );
}
