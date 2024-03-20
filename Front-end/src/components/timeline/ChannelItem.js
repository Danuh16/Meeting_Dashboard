import { ChannelBox } from "planby";

export const ChannelItem = ({ channel }) => {
  const { position, name } = channel;
  return (
    <ChannelBox {...position}>
      <h4 className="bg-gray-100 ml-4 pl-2 py-4 px-4 w-48  text-[#ECAB22] font-medium rounded-xl">
        <span className="py-4 p-[0.2rem] ml-[-0.5rem] rounded-l-lg bg-[#07522A] mr-2"></span>
        {name}
      </h4>
    </ChannelBox>
  );
};
