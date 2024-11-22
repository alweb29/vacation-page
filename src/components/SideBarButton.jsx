function SideBarButton({text, onClick}) {
  return (
    <button className="p-6 text-justify w-svw text-2xl w-fit" onClick={onClick}>
      {text}
    </button>
  );
}

export default SideBarButton;
