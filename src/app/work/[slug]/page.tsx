import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudy, getAllCaseStudies } from "@/content/case-studies";
import CaseStudyRenderer from "@/components/CaseStudyRenderer";

export async function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return { title: "Not Found" };
  return {
    title: `${caseStudy.title} | Kenna Hansen`,
    description: caseStudy.subtitle,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyRenderer caseStudy={caseStudy} />;
}
