import FooterOutside from "../FooterOutside";
import Top2 from "../top2";
import DarkText from "./ServiceText/darkText";
import LightText from "./ServiceText/lightText";
import Title from "./ServiceText/title";

export default function LibConst() {
  return (
    <div className="bg-white">
      <Top2 color="#82ca9c" />
      <Title color="#82ca9c" data="Library Construction" />
      <LightText data="Biotech Desk Pvt. Ltd. has tied up with Amplicon Express to provide the Indian scientist unrivaled expertise for BAC library construction. Your future goal may be to prepare a library for a full genome sequencing project or to seek a few BAC clones of interest, or numerous targets. You may or may not require these clones on nylon filters." />
      <div className="font-semibold text-xl p-10 ml-14">BAC Library:</div>
      <div className="font-normal px-10 pb-10 ml-32 leading-9">
        <ul className="list-disc">
          <li>HMW DNA shall be extracted.</li>
          <li>
            Size of each insert varies from 100 to 180 kb depending upon the
            organism.
          </li>
          <li>Coverage is guaranteed.</li>
          <li>
            Experience with plant, fungal, bacterial and animal libraries.
          </li>
          <li>Experience with GC-rich organisms and marine bacteria.</li>
          <li>
            Client will receive original library and may request for additional
            copies.
          </li>
          <li>
            Clones will be arrayed and amplified in 384-well plates (1 unique
            clone/well), and shipped on dry ice.
          </li>
          <li>
            Amount of clones received is based on a guaranteed coverage and
            120Kb average insert size.
          </li>
          <li>Nylon filters available as an option for further screening.</li>
          <li>Screening of BAC libraries can be also performed.</li>
        </ul>
      </div>
      <div className="font-semibold text-xl p-10 ml-14">FOSMID Library:</div>
      <div className="font-normal px-10 pb-10 ml-32 leading-9">
        <ul className="list-disc">
          <li>
            Hydroshear technology to extract ~40kb fragments without cloning
            bias.
          </li>
          <li>
            Suitable for samples for which HMW DNA cannot be contained such as
            metagenomic samples and some special environmental samples.
          </li>
          <li>Coverage is guaranteed.</li>
          <li>
            Client will receive original library and may request for additional
            copies.
          </li>
          <li>
            Clones will be arrayed and amplified in 384-well plates (1 unique
            clone/well), and shipped on dry ice.
          </li>
          <li>
            Amount of clones received is based on a guaranteed coverage and 40kb
            average insert size.
          </li>
          <li>Nylon filters available as an option for further screening.</li>
          <li>Screening of libraries can be also performed.</li>
        </ul>
      </div>
      <div className="font-semibold text-xl p-10 ml-14">
        Metagenomic Library:
      </div>
      <div className="font-normal px-10 pb-10 ml-32 leading-9">
        <ul className="list-disc">
          <li>
            
              ~40kb fragments are isolated without cloning bias.
            
          </li>
          <li>
            Coverage is guaranteed.
          </li>
          <li>
            
              Client will receive original library and may request for
              additional copies.
            
          </li>
          <li>
            
              Clones will be arrayed and amplified in 384-well plates (1 unique
              clone/well), and shipped on dry ice.
            
          </li>
          <li>
            
              Amount of clones received is based on a guaranteed coverage and
              40kb average insert size.
            
          </li>
          <li>
            
              Nylon filters available as an option for further screening.
            
          </li>
          <li>
            
              Screening of libraries can be also performed.
            
          </li>
        </ul>
      </div>
      <div className="font-semibold text-xl p-10 ml-14">
        Library preparation for NGS:
      </div>
      <div className="font-normal px-10 pb-10 ml-32 leading-9">
        <ul className="list-disc">
          <li>
            Pacbio.
          </li>
          <li>BioNano</li>
          <li>Illumina</li>
          <li>Gemcode</li>
        </ul>
      </div>

      <LightText data="Special shipping instructions given for sending samples" />
      <FooterOutside />
    </div>
  );
}
