import ResourceBar from "./ResourceBar";

function ResourceCombined() {
    return (
        <div className="grid place-items-center  pb-[10%]" style={{ backgroundColor: "white" }}>
            <ResourceBar color="#f7a3a0" page="https://drive.google.com/file/d/19E00M21YCiaSceIOHYhKzLbb5fYjElUO/view?usp=share_link" title="PCR RANGE" />
            <ResourceBar color="#029c49" page="https://drive.google.com/file/d/1XV66F-ZeGy16KASNCkGkmfmPR_aLchcG/view?usp=share_link" title="LADDERS / MARKERS" />
            <ResourceBar color="#f05023" page="https://drive.google.com/file/d/1PfcdULV8qLyrHDIazafesy86Dd2FuK_l/view?usp=share_link" title="PURIFICATION KITS" />
            <ResourceBar color="#247abf" page="https://drive.google.com/file/d/1ewr1XWvQ-x73hF4xemr7bCjcZHDx_nbe/view?usp=share_link" title="RNA Research" />
            <ResourceBar color="#d11a2b" page="https://drive.google.com/file/d/1LYCm00KK0aEXIB6zY0h-L64KCBpfvFkB/view?usp=share_link" title="INSTRUMENTS" />
            <ResourceBar color="#704a9e" page="" title="G2P-zol" />
            <ResourceBar color="#fbc539" page="https://drive.google.com/file/d/1NkxPugHUmjMpi-caV4QXvLHo0ErqfbBQ/view?usp=share_link" title="RESTRICTION ENZYMES" />
            <ResourceBar color="#7cc576" page="https://drive.google.com/file/d/1Y_o6qQMuLO5W2YcxJJEnDDU_e8w3Bg5v/view?usp=share_link" title="CATALOG" />
        </div>
    );
}

export default ResourceCombined