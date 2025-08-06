
interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return(
    <div className='master-container'>
      { children }
    </div>
  );
}

export default Container;