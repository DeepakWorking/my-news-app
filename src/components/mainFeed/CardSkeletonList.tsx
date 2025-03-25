import CardSkeleton from './CardSkeleton';

const SkeletonList = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </>
  );
};
export default SkeletonList;
