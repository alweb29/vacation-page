function SideBarButton({text, onClick}) {
  return (
    <button className="p-8 text-justify border w-svw text-3xl border-cyan-500 hover:bg-cyan-500 hover:-translate-y-1 duration-100" onClick={onClick}>
      {text}
    </button>
  );
}

export default SideBarButton;
