import React, { useEffect, useState } from 'react'
import styles from '@styles/codeblock.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaRegCopy, FaRegClipboard } from 'react-icons/fa'
import Prism from 'prismjs'
import { Button } from '@nextui-org/react'

interface CodeBlockProps {
	className: string
	children: string
}
const CodeBlock = ({ className = 'lang-js', children }: CodeBlockProps) => {
	const language = className.replace('lang-', '')
	const [isCopied, setIsCopied] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			Prism.highlightAll()
		}
	}, [])

	return (
		<div className={styles.mainCodeBlock}>
			<pre>
				<code className={`language-${language}`}>{children}</code>
			</pre>
			<div className={styles.clipboard}>
				<CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
					<Button auto>
						{isCopied ? (
							<FaRegClipboard className={styles.clipboardBtn} />
						) : (
							<FaRegCopy className={styles.clipboardBtn} />
						)}{' '}
						{isCopied ? 'Copied!' : 'Copy to Clipboard'}
					</Button>
				</CopyToClipboard>
			</div>
		</div>
	)
}

export default CodeBlock
