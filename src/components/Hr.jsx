/* eslint-disable react/prop-types */
function Hr({ className }) {
  return (
    <>
      <hr
        className={`${className} border-t border-solid border-neutral-200 dark:border-neutral-700`}
      />
    </>
  );
}

export default Hr;
