import PasswordGate from "@/components/PasswordGate";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <PasswordGate>{children}</PasswordGate>;
}
