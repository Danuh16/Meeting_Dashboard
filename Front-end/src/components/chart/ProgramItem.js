import {
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  ProgramImage,
  useProgram
} from "planby";

export const ProgramItem = ({ program, onDelete, ...rest }) => {
  const {
    styles,
    formatTime,
    set12HoursTimeFormat,
    isLive,
    isMinWidth
  } = useProgram({
    program,
    ...rest
  });

  const { data } = program;
  const { image, title, since, till } = data;

  const sinceDate = new Date(since).toISOString().split("T")[0];
  const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
  const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

  return (
    <ProgramBox width={styles.width} style={styles.position}>
      <ProgramContent width={styles.width} isLive={isLive}>
        <ProgramFlex>
          {isLive && isMinWidth && <ProgramImage src={image} alt="Preview" />}
          <ProgramStack>
            <ProgramTitle>{title} <button onClick={onDelete} className="ml-3 p-2 -mt-2 bg-[#2b4d52] font-extrabold rounded-full">Delete</button></ProgramTitle>
            <ProgramText>
            {sinceDate}: {sinceTime} - {tillTime}
            
            </ProgramText>
          </ProgramStack>
        </ProgramFlex>
      </ProgramContent>
    </ProgramBox>
  );
};
