import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex5Cb, useDiv1Cb, useDiv2Cb, useDiv3Cb, useFlex9Cb, useFlex8Cb, useDiv4Cb, useTextBox6Cb, useTextBox7Cb, useInput1Cb, useInput2Cb, useTextBox8Cb, useTextBox9Cb, useInput3Cb, useTextBox11Cb, useLink7Cb, useLink8Cb, useLink9Cb, useButton3Cb, useButton4Cb } from "../page-cbs/cfpform";
import "../page-css/cfpform.css";
import "../custom/cfpform";

export default function Cfpform() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex5Props = useStore((state)=>state["cfpform"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["cfpform"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Div1Props = useStore((state)=>state["cfpform"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["cfpform"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Div2Props = useStore((state)=>state["cfpform"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["cfpform"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Div3Props = useStore((state)=>state["cfpform"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["cfpform"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Flex9Props = useStore((state)=>state["cfpform"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["cfpform"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex8Props = useStore((state)=>state["cfpform"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["cfpform"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Div4Props = useStore((state)=>state["cfpform"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["cfpform"]["Div4"]);
const Div4Cb = useDiv4Cb()
const TextBox6Props = useStore((state)=>state["cfpform"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["cfpform"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["cfpform"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["cfpform"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const Input1Props = useStore((state)=>state["cfpform"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["cfpform"]["Input1"]);
const Input1Cb = useInput1Cb()
const Input2Props = useStore((state)=>state["cfpform"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["cfpform"]["Input2"]);
const Input2Cb = useInput2Cb()
const TextBox8Props = useStore((state)=>state["cfpform"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["cfpform"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["cfpform"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["cfpform"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Input3Props = useStore((state)=>state["cfpform"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["cfpform"]["Input3"]);
const Input3Cb = useInput3Cb()
const TextBox11Props = useStore((state)=>state["cfpform"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["cfpform"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Link7Props = useStore((state)=>state["cfpform"]["Link7"]);
const Link7IoProps = useIoStore((state)=>state["cfpform"]["Link7"]);
const Link7Cb = useLink7Cb()
const Link8Props = useStore((state)=>state["cfpform"]["Link8"]);
const Link8IoProps = useIoStore((state)=>state["cfpform"]["Link8"]);
const Link8Cb = useLink8Cb()
const Link9Props = useStore((state)=>state["cfpform"]["Link9"]);
const Link9IoProps = useIoStore((state)=>state["cfpform"]["Link9"]);
const Link9Cb = useLink9Cb()
const Button3Props = useStore((state)=>state["cfpform"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["cfpform"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button4Props = useStore((state)=>state["cfpform"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["cfpform"]["Button4"]);
const Button4Cb = useButton4Cb()

  return (<>
  <Flex2 className="p-cfpform Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Flex2 className="p-cfpform Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox2 className="p-cfpform TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<Flex2 className="p-cfpform Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Link2 className="p-cfpform Link7 bpt" {...Link7Props} {...Link7Cb} {...Link7IoProps}/>
<Link2 className="p-cfpform Link8 bpt" {...Link8Props} {...Link8Cb} {...Link8IoProps}/>
<Link2 className="p-cfpform Link9 bpt" {...Link9Props} {...Link9Cb} {...Link9IoProps}/>
</Flex2>
</Flex2>
<TextBox2 className="p-cfpform TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<Div className="p-cfpform Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<TextBox2 className="p-cfpform TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<Input className="p-cfpform Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Div>
<Div className="p-cfpform Div2 bpt" {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<TextBox2 className="p-cfpform TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<Input className="p-cfpform Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Div>
<Div className="p-cfpform Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<TextBox2 className="p-cfpform TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Input className="p-cfpform Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Div>
</Flex2>
<Div className="p-cfpform Div4 bpt" {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<Button2 className="p-cfpform Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<Button2 className="p-cfpform Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Div>
  </>);
}
