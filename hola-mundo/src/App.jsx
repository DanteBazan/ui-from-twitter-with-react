import React from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" isFollowing={true} directionUrl="https://x.com/midudev" />
            <TwitterFollowCard userName="soydalto" name="Lucas Dalto" isFollowing={true} directionUrl="https://x.com/SoyDalto" />
            <TwitterFollowCard userName="kheaYoungFlex" name="Khea" isFollowing={false} />
        </section>
    )
}

