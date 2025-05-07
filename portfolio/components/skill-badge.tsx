interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{name}</span>
}
