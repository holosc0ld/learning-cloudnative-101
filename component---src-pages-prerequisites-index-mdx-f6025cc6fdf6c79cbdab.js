(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{xbZq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return j}));var n=a("wx14"),l=a("zLVn"),c=(a("q1tI"),a("7ljp")),o=a("013z"),b=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},r=i("AnchorLinks"),p=i("AnchorLink"),s=i("Tabs"),u=i("Tab"),m=i("InlineNotification"),d={_frontmatter:b},O=o.a;function j(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(c.b)(O,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(r,{small:!0,mdxType:"AnchorLinks"},Object(c.b)(p,{mdxType:"AnchorLink"},"Required skills"),Object(c.b)(p,{mdxType:"AnchorLink"},"Workstation Setup"),Object(c.b)(p,{mdxType:"AnchorLink"},"Environment Setup"),Object(c.b)(p,{mdxType:"AnchorLink"},"Next Steps")),Object(c.b)("h2",null,"Required skills"),Object(c.b)("p",null,"This activites contained here require you to be proficient in working from the command line with a linux shell (Bash, Zsh, etc.) Below is a partial list of activites you should be able to perform. "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Copy, move, and rename files"),Object(c.b)("li",{parentName:"ul"},"Understand linux file permissions"),Object(c.b)("li",{parentName:"ul"},"Edit text files (vi, vim, emacs, etc)"),Object(c.b)("li",{parentName:"ul"},"Edit environment variables ($PATH)")),Object(c.b)("p",null,"Here is a course for learning (or brushing up) on working from the linux command line ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.udacity.com/course/linux-command-line-basics--ud595"}),"Linux Command Line Basics")),Object(c.b)("h2",null,"Workstation Setup"),Object(c.b)(s,{mdxType:"Tabs"},Object(c.b)(u,{label:"Openshift (MacOS/Linux)",mdxType:"Tab"},Object(c.b)("h2",null,"Create accounts"),Object(c.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://github.com"}),"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.katacoda.com/"}),"Katacoda Account"),": The account is free and easy to create.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.redhat.com/en"}),"RedHat Account"),": Needed for CodeReady Containers."))),Object(c.b)("h2",null,"Run System Check Script"),Object(c.b)("p",null,"Run the following command in your terminal to check which tools need to be installed."),Object(c.b)("p",null,"Using ",Object(c.b)("inlineCode",{parentName:"p"},"wget"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"wget -O - https://cloudnative101.dev/scripts/setup/system-check.sh | sh\n")),Object(c.b)("p",null,"Using ",Object(c.b)("inlineCode",{parentName:"p"},"curl"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -s https://cloudnative101.dev/scripts/setup/system-check.sh | sh\n")),Object(c.b)("p",null,"After the script is run, make sure to install any missing tools."),Object(c.b)("h2",null,"Install CLIs and tools"),Object(c.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"}),"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Don’t install just the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"}),"IBM Cloud CLI"),", install the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"}),"IBM Cloud CLI and Developer Tools"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -sL https://ibm.biz/idt-installer | bash\n")))))),Object(c.b)(m,{mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Note: ")," If you log in to the web UI using SSO, you’ll need to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"}),"create an API key")," for logging into the CLI.\nYou can also use this API key for ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/admin/installation-ibm-cloud"}),"installing the Developer Tools environment"),".")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop"),": Required for building and running docker images."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"Tekton CLI"),": Used to help control Tekton\npipelines from the command line."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"    brew tap tektoncd/tools\n    brew install tektoncd/tools/tektoncd-cli\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"Visual Studio Code"),": A popular code editor"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(c.b)("li",{parentName:"ul"},"Enabling ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"}),"launching VSCode from a terminal")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"}),"JDK 11"),": ",Object(c.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://code-ready.github.io/crc/#installing-codeready-containers_gsg"}),"OpenShift CodeReady Containers (CRC)")))),Object(c.b)(m,{kind:"warning",mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Warning:")," Make sure you have Cisco VPN turned off when using CRC."))),Object(c.b)(u,{label:"Openshift (Windows)",mdxType:"Tab"},Object(c.b)("h2",null,"Create accounts"),Object(c.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://github.com"}),"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.katacoda.com/"}),"Katacoda Account"),": The account is free and easy to create.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.redhat.com/en"}),"RedHat Account"),": Needed for CodeReady Containers."))),Object(c.b)("h2",null,"Cloud Native VM"),Object(c.b)("p",null,"Use the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/csantanapr/vagrant-cloud-native#install"}),"Cloud Native VM")," it comes pre-installed with kubernetes and all cloud native CLIs."),Object(c.b)("p",null,"Is highly recommended for Windows users to use this VM."),Object(c.b)("h2",null,"Install CLIs and tools"),Object(c.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"}),"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Don’t install just the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"}),"IBM Cloud CLI"),", install the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"}),"IBM Cloud CLI and Developer Tools"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -sL https://ibm.biz/idt-installer | bash\n")))))),Object(c.b)(m,{mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Note: ")," If you log in to the web UI using SSO, you’ll need to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"}),"create an API key")," for logging into the CLI.\nYou can also use this API key for ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/admin/installation-ibm-cloud"}),"installing the Developer Tools environment"),".")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop"),": Required for building and running docker images."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"Tekton CLI"),": Used to help control Tekton pipelines from the command line."))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"Visual Studio Code"),": A popular code editor"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(c.b)("li",{parentName:"ul"},"Enabling ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"}),"launching VSCode from a terminal")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"}),"JDK 11"),": ",Object(c.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://code-ready.github.io/crc/#installing-codeready-containers_gsg"}),"OpenShift CodeReady Containers (CRC)")))),Object(c.b)(m,{kind:"warning",mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Warning:")," Make sure you have Cisco VPN turned off when using CRC."))),Object(c.b)(u,{label:"Kubernetes (MacOS/Linux)",mdxType:"Tab"},Object(c.b)("h2",null,"Create accounts"),Object(c.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://github.com"}),"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.katacoda.com/"}),"Katacoda Account"),": The account is free and easy to create."))),Object(c.b)("h2",null,"Run System Check Script"),Object(c.b)("p",null,"Run the following command in your terminal to check which tools need to be installed."),Object(c.b)("p",null,"Using wget:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"wget -O - https://cloudnative101.dev/scripts/setup/system-check.sh | sh\n")),Object(c.b)("p",null,"Using curl:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -s https://cloudnative101.dev/scripts/setup/system-check.sh | sh\n")),Object(c.b)("p",null,"After the script is run, make sure to install any missing tools."),Object(c.b)("h2",null,"Install CLIs and tools"),Object(c.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"}),"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Don’t install just the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"}),"IBM Cloud CLI"),", install the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"}),"IBM Cloud CLI and Developer Tools"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -sL https://ibm.biz/idt-installer | bash\n")))))),Object(c.b)(m,{mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Note: ")," If you log in to the web UI using SSO, you’ll need to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"}),"create an API key")," for logging into the CLI.\nYou can also use this API key for ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/admin/installation-ibm-cloud"}),"installing the Developer Tools environment"),".")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop"),": Required for building and running docker images."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"Tekton CLI"),": Used to help control Tekton\npipelines from the command line."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"    brew tap tektoncd/tools\n    brew install tektoncd/tools/tektoncd-cli\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"Visual Studio Code"),": A popular code editor"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(c.b)("li",{parentName:"ul"},"Enabling ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"}),"launching VSCode from a terminal")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"}),"JDK 11"),": ",Object(c.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"}),"Minikube"),": Follow the instructions for your Operating System."))),Object(c.b)(m,{kind:"warning",mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Warning:")," Make sure you have Cisco VPN turned off when using minikube."))),Object(c.b)(u,{label:"Kubernetes (Windows)",mdxType:"Tab"},Object(c.b)("h2",null,"Create accounts"),Object(c.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://github.com"}),"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.katacoda.com/"}),"Katacoda Account"),": The account is free and easy to create."))),Object(c.b)("h2",null,"Cloud Native VM"),Object(c.b)("p",null,"Use the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/csantanapr/vagrant-cloud-native#install"}),"Cloud Native VM")," it comes pre-installed with kubernetes and all cloud native CLIs."),Object(c.b)("p",null,"Is highly recommended for Windows users to use this VM."),Object(c.b)("h2",null,"Install CLIs and tools"),Object(c.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"}),"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Don’t install just the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"}),"IBM Cloud CLI"),", install the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"}),"IBM Cloud CLI and Developer Tools"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -sL https://ibm.biz/idt-installer | bash\n")))))),Object(c.b)(m,{mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Note: ")," If you log in to the web UI using SSO, you’ll need to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"}),"create an API key")," for logging into the CLI.\nYou can also use this API key for ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/admin/installation-ibm-cloud"}),"installing the Developer Tools environment"),".")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop"),": Required for building and running docker images."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"Tekton CLI"),": Used to help control Tekton\npipelines from the command line."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"    brew tap tektoncd/tools\n    brew install tektoncd/tools/tektoncd-cli\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"Visual Studio Code"),": A popular code editor"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(c.b)("li",{parentName:"ul"},"Enabling ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"}),"launching VSCode from a terminal")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"}),"JDK 11"),": ",Object(c.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"}),"Minikube"),": Follow the instructions for your Operating System."))),Object(c.b)(m,{kind:"warning",mdxType:"InlineNotification"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Warning:")," Make sure you have Cisco VPN turned off when using minikube.")))),Object(c.b)("h2",null,"Environment Setup"),Object(c.b)(s,{mdxType:"Tabs"},Object(c.b)(u,{label:"MiniKube",mdxType:"Tab"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Verify your cluster has 4GB+ memory, and kubernetes 1.16+",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"minikube config view\n"))),Object(c.b)("li",{parentName:"ul"},"Verify your ",Object(c.b)("inlineCode",{parentName:"li"},"vm-driver")," is set for ",Object(c.b)("inlineCode",{parentName:"li"},"hyperkit"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"minikube config set vm-driver hyperkit\n"))),Object(c.b)("li",{parentName:"ul"},"In case memory is not set, or need to increase set the memory and recreate the VM",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"minikube config set memory 4096\nminikube config set kubernetes-version v1.16.6\nminikube delete\nminikube start\n"))),Object(c.b)("li",{parentName:"ul"},"Kubernetes should be v1.15+",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl version\n"))))),Object(c.b)(u,{label:"CRC (MiniShift)",mdxType:"Tab"},Object(c.b)("p",null,"Make sure CRC is installed. Check out the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg"}),"CRC Page")," "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Setup CRC ")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"  crc setup\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Start CRC ")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"  crc start\n"))),Object(c.b)(u,{label:"IKS",mdxType:"Tab"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Login to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud")," with your IBM ID.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click “Create Resource” and search for “kubernetes service”.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Select the tile for “Kubernetes Service” and do the following:"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Select the “Free Cluster” plan."),Object(c.b)("li",{parentName:"ul"},"Name your cluster."),Object(c.b)("li",{parentName:"ul"},"Select “Create” at the bottom right of the screen."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Once the Cluster is provisioned, Click on the “Connect via CLI” in the top right corner.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Follow the instructions to connect and you are set to go.")))),Object(c.b)(u,{label:"OpenShift on IBM Cloud (4.x)",mdxType:"Tab"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"In this approach you share an OpenShift cluster on IBM Cloud with other bootcamp attendees.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Considering 10-15 attendees we recommend a cluster with 3 worker nodes (each 8 vCPUs + 32GB RAM - b3c.8x32).")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Ask your IBM cloud account owner to provide access to an OpenShift cluster.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"In addition to the IBM Cloud CLI also install the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/openshift?topic=openshift-openshift-cli#cli_oc"}),"OpenShift Origin CLI")," to be able to execute all commands.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Open your OpenShift web console from within your IBM cloud account, select your profile and choose “copy login command” to retrieve an access token for the login.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Login with your OpenShift Origin CLI."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"  oc login --token=<token> --server=<server-url>:<server-port>\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Create your own project / namespace in OpenShift that you will leverage across all labs."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"  oc new-project <dev-your_initials>\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Validate in the OpenShift web console that your project has been created (Administrator view -> Home -> Projects)"))))),Object(c.b)("h2",null,"Next Steps"),Object(c.b)("p",null,"Once Setup is complete, you can now begin reading our about ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../concepts/cloud-native"}),"Cloud Native")," by clicking the link, or the ",Object(c.b)("inlineCode",{parentName:"p"},"Next")," button below."))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-prerequisites-index-mdx-f6025cc6fdf6c79cbdab.js.map