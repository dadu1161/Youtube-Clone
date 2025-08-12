import {ChevronDown, ChevronUp, Clapperboard, Home, Library, Repeat, History, PlaySquare, Clock, ThumbsUp, Flame, Music, Gamepad2, Newspaper, Trophy, } from "lucide-react"
import { Children, useState, type ElementType, type ReactNode } from "react"
import{ Button, buttonStyles } from "../components/Button"
import { twMerge } from "tailwind-merge"

export function Sidebar(){

    return (
    <>
     <aside className="sticky top-0 overflow-y-auto
     scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
    <SmallSideBarItem Icon={Home} title="home" url="/" />
    <SmallSideBarItem Icon={Repeat} title="Shorts" url="/shorts" />
    <SmallSideBarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
    <SmallSideBarItem Icon={Library} title="Library" url="/Library" />
    
    </aside>
    <aside className="hidden lg:flex w-56 lg:sticky top-0
     overflow-y-auto scrollbar-hidden pb-4 flex-col
      gap-2 px-2 flex-shrink-0">

        <LargeSidebarSection visibleItemCount={4}>
        <LargeSideBarItem isActive Icon={Home}
        title="Home" url="/" />
        <LargeSideBarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <LargeSideBarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
        <LargeSideBarItem Icon={Library} title="Library" url="/library" />
        <LargeSideBarItem Icon={History} title="History" url="/history" />
        <LargeSideBarItem Icon={PlaySquare} title="Your videos" url="/your-videos" />
        <LargeSideBarItem Icon={Clock} title="Watch later" url="/watch-later" />
        <LargeSideBarItem Icon={ThumbsUp} title="Liked videos" url="/liked-videos" />
        </LargeSidebarSection>

        <LargeSidebarSection title="Explore" visibleItemCount={3}>
        <LargeSideBarItem Icon={Flame} title="Trending" url="/trending" />
        <LargeSideBarItem Icon={Music} title="Music" url="/music" />
        <LargeSideBarItem Icon={Gamepad2} title="Gaming" url="/gaming" />
        <LargeSideBarItem Icon={Newspaper} title="News" url="/news" />
        <LargeSideBarItem Icon={Trophy} title="Sports" url="/sports" />
        </LargeSidebarSection>

    </aside>
    </>
    )
}

type SmallSideBarItemProps ={
    Icon: ElementType
    title: string
    url:string
}

function SmallSideBarItem({Icon , title, url}:SmallSideBarItemProps){
    return(
        <a href={url} className={twMerge(buttonStyles({
             variant: "ghost" }),"py-4 px-1 flex flex-col item-center rounded-lg gap-1")}>

            <Icon className="w-6 h-6" />
            <div className="text-sm">{title}</div>

        </a>
    )
}

type LargeSidebarSectionProps={
    children: ReactNode
    title?: string
    visibleItemCount?:number

}

function LargeSidebarSection(
    {
        children, 
        title,
        visibleItemCount=Number.POSITIVE_INFINITY,
    }
    :LargeSidebarSectionProps ) {
        const[isExpanded, setIsExpanded]=useState(false)
        const childrenArray= Children.toArray(children).flat()
        const showExpandButton =childrenArray.length > visibleItemCount
        const visibleChildren = isExpanded ? childrenArray: childrenArray.slice(0,visibleItemCount)
        const ButtonIcon = isExpanded ? ChevronUp :ChevronDown
        return<div>
        {title &&<div className="ml-4 mt-2 text-lg mb-1"></div>}
        {visibleChildren}
        {showExpandButton &&(
         <Button onClick={()=> setIsExpanded(e=>!e)} variant="ghost" className="w-full flex items-center rounded-lg gap-4 p-3" 
         >
            <ButtonIcon className="w-6 h-6 "/>
            <div>{isExpanded ? "Show less": "Show more"}</div>
         </Button>
         )}

        
        </div>
    
}


type LargeSidebaritemprops={
    Icon:ElementType
    title: string
    url: string
    isActive?: boolean,

}


function LargeSideBarItem({Icon , title, url, isActive=false, 

}:LargeSidebaritemprops) {
    return(
        <a
        href={url}
        className={twMerge(
            buttonStyles({variant:"ghost"}),
            `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ?"font-bold bg-neutral-100 hover:bg-gray-300" : undefined }`
        )}>
            <Icon className="w-6 h-6 "/>
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                {title}
            </div>
        </a>
    )
}