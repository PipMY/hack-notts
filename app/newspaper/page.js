// app/news/uni-lake/page.js
import Image from "next/image";

export default function UniLakeArticle() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#000000] font-serif text-[#2b2b2b]">
      <main className="w-full max-w-4xl bg-[#f9f5ee] p-10 shadow-[0_0_20px_rgba(0,0,0,0.15)] border border-[#d4c5a2] rounded-md">
        {/* Newspaper Header */}
        <header className="text-center border-b-4 border-[#2b2b2b] pb-4 mb-8">
          <h1 className="text-5xl font-bold uppercase tracking-widest">
            The Nottingham Evening Post
          </h1>
          <p className="italic text-sm mt-2">
            Established 1892 — Truth Above All
          </p>
        </header>

        {/* Headline */}
        <section className="text-center mb-10">
          <h2 className="text-4xl font-extrabold uppercase leading-tight mb-3">
            Shock at Uni Lake: Woman Found Drowned — New Cult Under Investigation
            <br /> After Medieval Practices Uncovered
          </h2>
          <p className="italic text-sm text-[#6b5c3a]">
            By Nottingham Evening Post — October 26, 2025
          </p>
        </section>

        {/* Article Body */}
        <article className="columns-1 md:columns-2 gap-8 text-justify leading-relaxed">
          <p className="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-[#2b2b2b]">
            A woman’s body was recovered from the university lake last night in
            what detectives are treating as a targeted drowning linked to a newly
            surfaced local cult that had allegedly accused her of being a “witch.”
          </p>

          <p className="mb-4">
            Emergency services were called shortly before 22:00 and the woman —
            not yet formally identified while next of kin are informed — was
            pronounced dead at the scene. Detectives from the Major Crime Unit
            say initial inquiries point to a deliberate assault and a homicide
            investigation is under way.
          </p>

          <p className="mb-4">
            Students and staff reported seeing a small, secretive group meeting on
            campus in recent weeks. Witnesses say the victim had clashed with
            members after questioning rumours about their activities. “She was
            always defending people — it’s devastating,” one student said.
          </p>

          <figure className="my-6 text-center">
            <Image
              src="/campus-lake.jpg"
              alt="University lake at dusk"
              width={600}
              height={400}
              className="mx-auto border border-[#bfa98c] grayscale"
            />
            <figcaption className="text-xs italic mt-2 text-[#6b5c3a]">
              The university lake where the tragedy occurred. (File Photo)
            </figcaption>
          </figure>

          <p className="mb-4">
            Officers confirmed they are examining the group’s online material.
            A weekly bulletin, recently leaked to police, contains unusual
            formatting and cryptic references that may help establish the group’s
            communication channels. Police say the leaked bulletin is being
            analysed for leads.
          </p>

          <p className="mb-4">
            Detective Inspector Clare Morton appealed for lawful assistance: anyone
            with hacking experience please come forward to receive a copy and aid
            the police in infiltrating the cult’s chat room. Police state that some
            irregularities in the news page may be the solution to finding the
            secret room.
          </p>
        </article>

        {/* Footer */}
        <footer className="mt-10 pt-4 border-t border-[#d4c5a2] text-center text-xs text-[#6b5c3a] italic">
          © 2025 The Nottingham Post (fictional). All names and details are fictional for creative purposes.
        </footer>
      </main>
    </div>
  );
}
