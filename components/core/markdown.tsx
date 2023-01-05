"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import rehypeHighlight from 'rehype-highlight'
import SyntaxHighlighter from 'react-syntax-highlighter';
import rangeParser from 'parse-numeric-range'
import { androidstudio as theme } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const MarkdownComponents: object = {
    code({ node, inline, className, ...props }:any) {
        const match = /language-(\w+)/.exec(className || '')
        const hasMeta = node?.data?.meta

        const applyHighlights = (applyHighlights: number) => {
            if (hasMeta) {
                const RE = /{([\d,-]+)}/
                const metadata = node.data.meta?.replace(/\s/g, '')
                //@ts-ignore
                const strlineNumbers = RE?.test(metadata) ? RE?.exec(metadata)[1]
                    : '0'
                console.log(strlineNumbers)
                const highlightLines = rangeParser(strlineNumbers)
                console.log(highlightLines)
                const data: string | null = highlightLines.includes(applyHighlights) ? 'highlight' : null
                console.log(applyHighlights)
                return { data }
            } else {
                return {}
            }
        }

        return match ? (
            <SyntaxHighlighter
                style={theme}
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                showLineNumbers={true}
                wrapLines={!!hasMeta}
                useInlineStyles={true}
                lineProps={applyHighlights}
                {...props}
            />
        ) : (
            <code className={className} {...props} />
        )
    },
}

const Markdown = (props: any) => <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]} components={MarkdownComponents}>{props.children}</ReactMarkdown>;

export default Markdown;