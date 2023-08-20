import Pattern from '/pattern.svg?url';

export default function Header() {
  return (
    <>
      <div className="bg-background-light dark:bg-background-dark pb-[25vh] border-b-4 border-accent-dark"
        style = {{backgroundImage: `url(${Pattern})`}}
      >
        <div>
          <div className="flex w-full flex-col items-center justify-center p-4">
            <div className="relative mb-8 bg-background-dark text-text-dark border border-background-dark text-4xl md:text-6xl font-bold">
            Money Curves
            <sup className="absolute top-0 left-full text-xs text-primary">
              [BETA]
            </sup>
          </div>
        </div>
      </div>
      <div className="py-10">
      </div>
    </div>
   </>
  )
}
