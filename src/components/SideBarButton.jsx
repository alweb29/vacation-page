function SideBarButton({text, onClick}) {
  return (
    <button className="p-8 text-justify border w-svw text-3xl border-cyan-400" onClick={onClick}>
      {text}
    </button>
  );
}

export default SideBarButton;
