import { FC } from 'react';

interface ChooseWeightProps {
  setWeight: (e: number) => void;
}

const ChooseWeight: FC<ChooseWeightProps> = ({ setWeight }) => {
  return (
    <div className="flex flex-row w-[100%]">
      <div className="text-sm p-2 rounded-md">
        0-2kg
        <input
          type="radio"
          name="weight"
          value={1}
          className="ml-2"
          onChange={(e): void => setWeight(+e.target.value)}
          defaultChecked
        />
      </div>
      <div className="mr-2 text-sm p-2 rounded-md ">
        2-5kg
        <input
          type="radio"
          name="weight"
          value={2}
          className="ml-2"
          onChange={(e): void => setWeight(+e.target.value)}
        />
      </div>
      <div className="mr-2 text-sm p-2 rounded-md">
        5-10kg
        <input
          type="radio"
          name="weight"
          value={3}
          className="ml-2"
          onChange={(e): void => setWeight(+e.target.value)}
        />
      </div>
      <div className="mr-2 text-sm p-2 rounded-md ">
        10-15kg
        <input
          type="radio"
          name="weight"
          value={4}
          className="ml-2"
          onChange={(e): void => setWeight(+e.target.value)}
        />
      </div>
    </div>
  );
};

export { ChooseWeight };
