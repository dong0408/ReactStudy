const Demo = (props) => {
  console.log(props, "demo");
  return (
    <div>
      函数组件
      <p>{props.car}</p>
      <p>{props.money}</p>
      <p>{props.check ? "是" : "否"}</p>
    </div>
  );
};

export default Demo;

// export default function Demo() {
//   return (
//     <div>
//       <h3>Demo组件</h3>
//     </div>
//   );
// }
