export const keyStep = ({
  name,
  answer
}: {
  name: string;
  type: string;
  answer: string | undefined;
}) => `${name}/${answer}`;
