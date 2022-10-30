import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex4Cb, useFlex7Cb, useFlex6Cb, useTextBox4Cb, useTextBox5Cb, useButton2Cb, useTextBox10Cb, useLink4Cb, useLink5Cb, useLink6Cb } from "../page-cbs/aboutus";
import "../page-css/aboutus.css";
import "../custom/aboutus";

export default function Aboutus() {
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

  const Flex4Props = useStore((state)=>state["aboutus"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["aboutus"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Flex7Props = useStore((state)=>state["aboutus"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["aboutus"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex6Props = useStore((state)=>state["aboutus"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["aboutus"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const TextBox4Props = useStore((state)=>state["aboutus"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["aboutus"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["aboutus"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["aboutus"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Button2Props = useStore((state)=>state["aboutus"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["aboutus"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox10Props = useStore((state)=>state["aboutus"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["aboutus"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Link4Props = useStore((state)=>state["aboutus"]["Link4"]);
const Link4IoProps = useIoStore((state)=>state["aboutus"]["Link4"]);
const Link4Cb = useLink4Cb()
const Link5Props = useStore((state)=>state["aboutus"]["Link5"]);
const Link5IoProps = useIoStore((state)=>state["aboutus"]["Link5"]);
const Link5Cb = useLink5Cb()
const Link6Props = useStore((state)=>state["aboutus"]["Link6"]);
const Link6IoProps = useIoStore((state)=>state["aboutus"]["Link6"]);
const Link6Cb = useLink6Cb()

  return (<>
  <Flex1 className="p-aboutus Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox1 className="p-aboutus TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Flex1 className="p-aboutus Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Link1 className="p-aboutus Link4 bpt" {...Link4Props} {...Link4Cb} {...Link4IoProps}/>
<Link1 className="p-aboutus Link5 bpt" {...Link5Props} {...Link5Cb} {...Link5IoProps}/>
<Link1 className="p-aboutus Link6 bpt" {...Link6Props} {...Link6Cb} {...Link6IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-aboutus Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<TextBox1 className="p-aboutus TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox1 className="p-aboutus TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<Button1 className="p-aboutus Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex1>
  </>);
}
