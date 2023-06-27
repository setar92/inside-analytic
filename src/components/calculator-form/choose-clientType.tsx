import { FC } from 'react';

interface ChooseWeightProps {
  setUserType: (type: number) => void;
}

const ChooseClientType: FC<ChooseWeightProps> = ({ setUserType }) => {
  return (
    <div className="flex flex-row w-[100%]">
      <div className="text-sm p-2 rounded-md">
        Personal client
        <input
          type="radio"
          name="client"
          value={0}
          className="ml-2"
          onChange={(e): void => setUserType(+e.target.value)}
          defaultChecked
        />
      </div>
      <div className="mr-2 text-sm p-2 rounded-md">
        Business client
        <input
          type="radio"
          name="client"
          value={1}
          className="ml-2"
          onChange={(e): void => setUserType(+e.target.value)}
        />
      </div>
    </div>
  );
};

export { ChooseClientType };
