"use client";

import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      category: "Levering og Fragt",
      questions: [
        {
          question: "Hvad er jeres leveringstid?",
          answer:
            "Vi tilbyder levering inden for 1-3 hverdage for ordrer i Danmark. Leveringstiden for internationale ordrer kan variere afhængigt af destinationen, men normalt tager det 5-10 hverdage.",
        },
        {
          question: "Tilbyder I gratis fragt?",
          answer:
            "Ja, vi tilbyder gratis fragt for ordrer over 500 kr. For ordrer under 500 kr. gælder en fast leveringspris på 49 kr.",
        },
        {
          question: "Kan jeg spore min ordre?",
          answer:
            "Ja, du modtager et sporingsnummer, så snart din ordre er afsendt. Du kan bruge dette nummer til at spore din pakke via vores leverandørers platforme.",
        },
        {
          question: "Leverer I til hele verden?",
          answer:
            "Vi tilbyder international levering til udvalgte lande. Se vores liste over tilgængelige lande i kassen under leveringsmetoder.",
        },
      ],
    },
    {
      category: "Betaling",
      questions: [
        {
          question: "Hvilke betalingsmetoder accepterer I?",
          answer:
            "Vi accepterer Visa, Mastercard, MobilePay, PayPal og Apple Pay.",
        },
        {
          question: "Er mine betalingsoplysninger sikre?",
          answer:
            "Ja, vi bruger SSL-kryptering for at beskytte dine betalingsoplysninger. Alle betalinger håndteres via sikre og betroede betalingsudbydere.",
        },
        {
          question: "Kan jeg betale med MobilePay?",
          answer:
            "Ja, vi accepterer MobilePay som en hurtig og sikker betalingsmetode.",
        },
      ],
    },
    {
      category: "Returnering og Bytte",
      questions: [
        {
          question: "Hvordan returnerer jeg en vare?",
          answer:
            "Du kan returnere en vare ved at kontakte vores kundeservice og anmode om en returlabel. Følg instruktionerne, og send varen tilbage til os.",
        },
        {
          question: "Hvor lang tid tager det at få en refundering?",
          answer:
            "Når vi har modtaget og behandlet din returvare, kan der gå 5-7 hverdage, før pengene er tilbage på din konto.",
        },
        {
          question: "Kan jeg bytte en vare til en anden størrelse eller farve?",
          answer:
            "Ja, du kan bytte din vare, så længe den ønskede størrelse eller farve er på lager. Kontakt vores kundeservice for hjælp.",
        },
      ],
    },
    {
      category: "Produkter",
      questions: [
        {
          question: "Hvordan vælger jeg den rigtige størrelse?",
          answer:
            "Vi anbefaler, at du bruger vores størrelsesguide, der findes på hver produktside. Hvis du har spørgsmål, kan du kontakte vores supportteam for yderligere vejledning.",
        },
        {
          question: "Hvor er jeres produkter lavet?",
          answer:
            "Vores produkter er designet med kærlighed og fremstillet på forskellige certificerede fabrikker for at sikre høj kvalitet og etisk produktion.",
        },
        {
          question: "Hvordan vasker og vedligeholder jeg jeres tøj?",
          answer:
            "Vi anbefaler at vaske tøjet ved 30°C og undgå brug af tørretumbler. Følg altid vaskeanvisningerne på tøjet for at sikre lang holdbarhed.",
        },
      ],
    },
    {
      category: "Bestilling",
      questions: [
        {
          question: "Kan jeg ændre eller annullere min ordre efter, jeg har lagt den?",
          answer:
            "Hvis din ordre endnu ikke er blevet afsendt, kan vi hjælpe med at ændre eller annullere den. Kontakt vores kundeservice hurtigst muligt.",
        },
        {
          question: "Hvordan ved jeg, at min ordre er blevet modtaget?",
          answer:
            "Du vil modtage en ordrebekræftelse via e-mail, så snart din ordre er blevet behandlet.",
        },
        {
          question: "Kan jeg bestille som gave og få pakken pakket ind?",
          answer:
            "Ja, vi tilbyder gaveindpakning ved kassen. Du kan også tilføje en personlig besked til modtageren.",
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-12 px-6 lg:px-12">
        {/* Margin added here to push it down from the navbar */}
        <h1 className="text-4xl font-bold text-center mb-12 mt-24">Ofte Stillede Spørgsmål</h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full text-left bg-gray-800 px-4 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-700 transition flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.category}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="bg-gray-700 p-4 mt-2 rounded-lg shadow-md space-y-4">
                  {faq.questions.map((q, qIndex) => (
                    <div key={qIndex}>
                      <p className="font-bold text-gray-100">{q.question}</p>
                      <p className="text-gray-300 mt-2">{q.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
