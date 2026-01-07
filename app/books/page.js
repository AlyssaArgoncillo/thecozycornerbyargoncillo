import Image from "next/image";

export default function BooksPage() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Book Recommendations</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book1.png" alt="Book cover for Modern CSS with Tailwind, Second Edition by Noel Rappin. Features a yellow paper airplane flying over a dark, blurred background with a magnifying glass silhouette. Subtitle notes Flexible Styling Without the Fuss and mentions Tailwind 3.0. Published by The Pragmatic Programmers." width={300} height={400} />
          <h3 className="text-zinc-600 mt-3 font-medium">Modern CSS with Tailwind</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book2.png" alt="Minimalist book cover for The Next.js Handbook by Flavio Copes. White background with black text. Title NEXT.JS is stylized with a diagonal line through the N and T. Handbook appears below in modern font. Author's name is handwritten in white on a black strip at the bottom." width={300} height={400} />
          <h3 className="text-zinc-600 mt-3 font-medium">The Next.js Handbook</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book3.jpg" alt="Book cover for Mindset: The New Psychology of Success by Carol S. Dweck, Ph.D., updated edition. Title in bold blue font with subtitle How We Can Learn to Fulfill Our Potential and listed areas: parenting, business, school, relationships. Includes a gold circle noting over 3 million copies in print and a quote from Bill Gates praising the book’s insights into beliefs and learning." width={300} height={400} />
          <h3 className="text-zinc-600 mt-3 font-medium">Mindset</h3>
        </div>
      </div>
    </section>
  );
}