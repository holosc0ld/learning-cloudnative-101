(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"9+mY":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a("wx14"),c=a("zLVn"),o=(a("q1tI"),a("7ljp")),b=a("013z"),r=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=i("Accordion"),s=i("AccordionItem"),p={_frontmatter:r},m=b.a;function d(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{mdxType:"Accordion"},Object(o.b)(s,{title:"1. Provisioning a LogDNA instance from the catalog",mdxType:"AccordionItem"},"To provision an instance of LogDNA from the IBM Catalog catalog, complete the following steps:",Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/login"}),"Log in to the IBM Cloud console"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Catalog"),". The list of the services that are available on IBM Catalog opens.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To filter the list of services that is displayed, select the ",Object(o.b)("strong",{parentName:"p"},"Developer Tools")," category.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the ",Object(o.b)("strong",{parentName:"p"},"IBM Cloud Log Analysis with LogDNA")," tile.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select the region. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select a service plan. By default, the ",Object(o.b)("strong",{parentName:"p"},"Lite")," plan is set."),Object(o.b)("p",{parentName:"li"},"For more information about the service plans, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/Monitoring-with-Sysdig?topic=Monitoring-with-Sysdig-pricing_plans#pricing_plans"}),"Service plans"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter a service name.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select a resource group. By default, the ",Object(o.b)("strong",{parentName:"p"},"Default")," resource group is set.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Create"),"."))),Object(o.b)("p",null,"After you provision an instance, "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"Observability")," dashboard opens. "),Object(o.b)("li",{parentName:"ul"},"A service ID is automatically created. You can use this service ID to get the LogDNA access key for your instance. ")),Object(o.b)("p",null,"Next, configure a metric source by adding a LogDNA agent. This agent is responsible for collecting and forwarding logs to LogDNA. "))),Object(o.b)(l,{mdxType:"Accordion"},Object(o.b)(s,{title:"2. Create minikube cluster",mdxType:"AccordionItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create the VM and ssh into it",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vagrant up\nvagrant ssh\n"))),Object(o.b)("li",{parentName:"ol"},"Run minikube start with the following command",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"minikube start --driver=none\n")))))),Object(o.b)(l,{mdxType:"Accordion"},Object(o.b)(s,{title:"3. Install LogDNA agent",mdxType:"AccordionItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Setup the configuration variable for LogDNA Agent, replace the variables with valid values, you can get this from your LogDNA instance on IBM Cloud console:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'LOGDNA_ACCESS_KEY="INSERT KEY HERE"\nREGION="us-south | us-east | eu-de | eu-gb | jp-tok | au-syd"\n')),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LOGDNA_ACCESS_KEY")," is the ingestion key for the instance that you previously created."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"REGION")," It the region where your logdna instance is located."))),Object(o.b)("li",{parentName:"ol"},"Create a namespace ",Object(o.b)("inlineCode",{parentName:"li"},"ibm-observe"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create namespace ibm-observe \n"))),Object(o.b)("li",{parentName:"ol"},"Create a kubernetes secret in the namesapce ",Object(o.b)("inlineCode",{parentName:"li"},"ibm-observe")," where the logdna agent will be install.",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"(set -u; \\\nkubectl create secret generic logdna-agent-key \\\n  --from-literal=logdna-agent-key=${LOGDNA_ACCESS_KEY} \\\n  -n ibm-observe \\\n)\n"))),Object(o.b)("li",{parentName:"ol"},"Run the following command to download the install script and execute",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"(set -u; \\\nkubectl create \\\n  -f https://assets.${REGION}.logging.cloud.ibm.com/clients/logdna-agent-ds.yaml \\\n  -n ibm-observe \\\n)\n"))),Object(o.b)("li",{parentName:"ol"},"Verify logdna agent is working",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get -n ibm-observe ds/logdna-agent\nkubectl logs -n ibm-observe ds/logdna-agent\n")))))),Object(o.b)(l,{mdxType:"Accordion"},Object(o.b)(s,{title:"4. Verify insgestion of logs",mdxType:"AccordionItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open LogDNA"),Object(o.b)("li",{parentName:"ul"},"Select Views"),Object(o.b)("li",{parentName:"ul"},"Kubernetes messages should show up"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.logdna.com/docs/how-to-use-the-dashboard"}),"Navigating the Dashboard"))),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAElEQVQoz21SW4+TQBSmxsa2aasPQC/sFobLMDeGuQBDSV1NzKobN/pifPXNNzVm9f976KqJyZ6QYSDzzXc5x3u2frrxg8V8rrW6+3n34/vX1iiUpkWa5XmepmmSJBgXUbSP9vv9bqztbheGYRAE3uLJbD557Hneer0G/GBrJ4lS9sVxEJWQsmKM1rKqKlFLyQQjpCSEIISiKPI2m/CQxHBf4PuVrHpddZJa095eXQkphOCkLCt4cQZLSXGWZ2mWxnF8eXnpgSpZyaIottsNF/xo5clwre3z4XQ8us61WtVaj48xGvgJLfMiRyiNDwcPCONdtAlC3/dBZ19TzXHfDN9u36kGzivgdK7turZtrKh5ksQXf8ubTCbeuZbLpdL1sakBr5TpOgduQTA4hA2lhHMOK2WUMQZBjp7/gVer1ehZkkYUre0/v35jGmONAbtd1zSwt5pLdp8/GP6PGcCylk6WhuGPL6+/3Ly1XQuyISeQ7RxcYHnNATymdXgADMylYvjUnn69/6DApdague8deAawUDxBycWZ9gFmMNyLwuju06tr2xqAQI9BtoXuNVaqCmyXpATlo+dH5/oTmKqdka1kY6t6RyAeSjHGY1ykhKgwwXkOnc5AOcybN5vNFovFdDoNgnAYTnB0nCAYDEoL+CjGYvdxE4LL8UeCUIaSFKHfrdhqkJRszd4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"logdna",title:"logdna",src:"/static/f4562dcaa1c93a23c1d2192472d37ecc/3cbba/overview-dashboard.png",srcSet:["/static/f4562dcaa1c93a23c1d2192472d37ecc/7fc1e/overview-dashboard.png 288w","/static/f4562dcaa1c93a23c1d2192472d37ecc/a5df1/overview-dashboard.png 576w","/static/f4562dcaa1c93a23c1d2192472d37ecc/3cbba/overview-dashboard.png 1152w","/static/f4562dcaa1c93a23c1d2192472d37ecc/aed01/overview-dashboard.png 1239w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(l,{mdxType:"Accordion"},Object(o.b)(s,{title:"5. Remove the LogDNA agent",mdxType:"AccordionItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Delete the namespace where the logdna agent is installed",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete ns ibm-observe\n")))))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-logging-logdna-activities-minikube-index-mdx-a8d94762312c850f8459.js.map