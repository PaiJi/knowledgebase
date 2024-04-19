import React from "react";
import Paginator from "@theme-original/DocItem/Paginator";
import type PaginatorType from "@theme/DocItem/Paginator";
import type { WrapperProps } from "@docusaurus/types";

import { DisqusJS } from "disqusjs/react";
import "disqusjs/dist/react/styles/disqusjs.css";

type Props = WrapperProps<typeof PaginatorType>;

export default function PaginatorWrapper(props: Props): JSX.Element {
  return (
    <>
      <Paginator {...props} />
      <DisqusJS
        className="docusaurus-mt-lg"
        shortname="jipai-knowledgebase"
        siteName="JiPai Knowledgebase"
        identifier=""
        url=""
        api="https://disqus.skk.moe/disqus/"
        apikey="XmzmGKEBpV11VlOd0K8QJnDOIsJRsW6y9vf6DO6Nw2MkWXkSGvqYSReey9btEU7U"
        admin="jipai"
        adminLabel="MOD"
        nocomment="还没有人在这里留过言..."
      />
    </>
  );
}
