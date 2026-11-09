interface SkillTagProps {
  title: string;
}

export default function SkillTag({ title }: SkillTagProps) {
  return (
    <span className="block px-3 py-1 border border-violet-blue rounded font-semibold text-violet-blue text-sm sm:text-base">
      {title}
    </span>
  );
}
