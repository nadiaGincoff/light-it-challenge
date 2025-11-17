import { motion } from 'framer-motion';

type HeaderProps = {
  title: string;
  description: string;
  withButton?: boolean;
  buttonAction?: () => void;
  buttonText?: string;
};

export default function Header({ title, description }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <div className="flex flex-col items-left md:flex-row md:items-center gap-3 justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold text-medical-dark mb-2">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.header>
  );
}
