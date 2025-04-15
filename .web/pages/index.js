/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Button as RadixThemesButton, Code as RadixThemesCode, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, isTrue } from "$/utils/state"
import { Moon as LucideMoon, Sun as LucideSun } from "lucide-react"
import NextLink from "next/link"
import NextHead from "next/head"



export function Fragment_ea9b5a5bdd407a583f7d3e04c058741a () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    <Fragment>

{(resolvedColorMode === "light") ? (
  <Fragment>

<LucideSun css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideMoon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
  )
}

export function Iconbutton_8a9d8773c32a952da1e7953302da10e8 () {
  
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])



  
  return (
    <RadixThemesIconButton css={({ ["padding"] : "6px", ["position"] : "fixed", ["top"] : "2rem", ["right"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>

<Fragment_ea9b5a5bdd407a583f7d3e04c058741a/>
</RadixThemesIconButton>
  )
}

export function Link_e61c3d7cba79d2ee9269c3e7fdc2d6bf () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} size={"3"}>

<NextLink href={"https://reflex.dev"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["textAlign"] : "center", ["padding"] : "1em" })} direction={"row"} gap={"3"}>

{"Built with "}
<svg aria-label={"Reflex"} css={({ ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} height={"12"} role={"img"} width={"56"} xmlns={"http://www.w3.org/2000/svg"}>

<path d={"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z"}/>
<path d={"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z"}/>
<path d={"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z"}/>
<path d={"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z"}/>
<path d={"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z"}/>
<path d={"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z"}/>
<title>

{"Reflex"}
</title>
</svg>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<RadixThemesContainer css={({ ["padding"] : "16px" })} size={"3"}>

<Iconbutton_8a9d8773c32a952da1e7953302da10e8/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["minHeight"] : "85vh" })} direction={"column"} justify={"center"} gap={"5"}>

<RadixThemesHeading size={"9"}>

{"Welcome to Reflex GPT!"}
</RadixThemesHeading>
<RadixThemesText as={"p"} size={"5"}>

{"Get started by editing something like"}
<RadixThemesCode>

{"Reflex_GPT/Reflex_GPT.py"}
</RadixThemesCode>
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://reflex.dev/docs/getting-started/introduction/"} passHref={true}>

<RadixThemesButton>

{"Check out our docs!"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<Link_e61c3d7cba79d2ee9269c3e7fdc2d6bf/>
</RadixThemesFlex>
</RadixThemesContainer>
<NextHead>

<title>

{"ReflexGpt | Index"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
