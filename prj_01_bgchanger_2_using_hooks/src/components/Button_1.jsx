export default function Button_1({ text, onclick }) {
  let text_to_color = {
    'RED': 'bg-red-200 text-black font-bold',
    'YELLOW': 'bg-yellow-200 text-black',
    'GREEN': 'bg-green-200 text-black',
    'AMBER': 'bg-amber-200 text-black'
  };

  return(
  <button
    className=
    {`${text_to_color[text]} p-3 text-3xl  rounded-2xl`}
    onClick={onclick}
  >
  {text}
  </button>);
}
