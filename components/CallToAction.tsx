import Section from "./UI/Section";
import { ArrowHorizontal, ArrowVertical } from "./UI/icons";
import Reveal from "./UI/Reveal";
import Button from "./UI/Button";

const CallToAction: React.FC = () => {
  return (
    <Section className="bg-primary-800 text-white py-10 md:py-16" noMargin>
      <div className="flex flex-col gap-6 md:flex-row md:gap-17 items-center justify-between">
        <Reveal color="white">
          <h2 className="m-0 md:text-[38px] lg:text-[42px] text-center md:text-left">
            LET'S DEVELOP,
            <br /> LET'S COOPERATE!
          </h2>
        </Reveal>

        <div className="hidden md:block flex-grow mx-4">
          <ArrowHorizontal />
        </div>
        <div className="md:hidden mb-8">
          <ArrowVertical width={20} height={80} />
        </div>

        <div>
          <Button
            className="border font-bold"
            variant="primary"
            paddingX="px-18"
            paddingY="py-9"
            fontSize="text-2xl"
          >
            LET'S TALK!
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CallToAction;
