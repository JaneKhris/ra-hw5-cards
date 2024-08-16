interface CardProps {
    title: string;
    text: string;
    textBtn: string;
    children?: React.ReactNode;
  }

function Card({ title, text, textBtn, children }: CardProps) {
  return (
    <>
      <div className="card" style={{width: "18rem"}} >
        {children}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}
          </p>
          <a href="#" className="btn btn-primary">{textBtn}
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
