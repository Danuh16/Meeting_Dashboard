import { ChannelBox, ChannelLogo } from "planby";

export const ChannelItem = ({ channel }) => {
  const { position, name } = channel;
  return (
    <ChannelBox {...position}>
      {/* Overwrite styles by add eg. style={{ maxHeight: 52, maxWidth: 52,... }} */}
      {/* Or stay with default styles */}
      {/* <ChannelLogo
        src={logo}
        alt="Logo"
        style={{ maxHeight: 52, maxWidth: 52 }}
      /> */}


        <h4 className="bg-white  py-4 text-gray-500  rounded-xl">
          <span className="py-4 p-[0.09rem] rounded-l-lg bg-green-400 mr-2"></span>
          {name}
        </h4>

    </ChannelBox>
  );
};
