import { ExportTestDef } from "../export-test-def";
import * as AbstractImage from "../../../../../src/index";

const svgEncoded = `PHN2ZyBpZD0ic3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwLCAwLCA0MDAsNDAwIj48ZyBpZD0ic3ZnZyI+PHBhdGggaWQ9InBhdGgwIiBkPSJNNDguNDAwIDU2LjY4NyBDIDM4Ljc4OCA1OS44MTgsMzQuMzE1IDY3LjE4NCwzNi42MjIgNzYuMDg1IEMgMzguMjY3IDgyLjQzNSw0Mi41MjAgODYuMDUzLDU0LjgwMCA5MS41NTQgQyA2My44OTMgOTUuNjI2LDY2LjMxMSAxMDMuNDc4LDYwLjI1OCAxMDkuMjc3IEMgNTkuNDEwIDExMC4wOTAsNTguMTk3IDExMC44NjksNTcuNTYyIDExMS4wMDggQyA1Ni45MjggMTExLjE0OCw1Ni4zMDYgMTExLjQyOCw1Ni4xODEgMTExLjYzMSBDIDU1Ljc5OCAxMTIuMjUwLDQ3LjYwOCAxMTIuMDU4LDQ1LjYwMCAxMTEuMzgzIEMgNDMuNjAxIDExMC43MTEsNDIuMTA2IDExMC4wODksNDEuMjAwIDEwOS41NTEgQyA0MC44NzAgMTA5LjM1NSw0MC4zMzAgMTA5LjA3Nyw0MC4wMDAgMTA4LjkzMiBDIDM5LjY3MCAxMDguNzg4LDM4LjkyMiAxMDguMzM5LDM4LjMzOCAxMDcuOTM1IEMgMzUuODQ3IDEwNi4yMTAsMzQuODAwIDEwNy4wNTEsMzQuODAwIDExMC43NzkgQyAzNC44MDAgMTE0LjE0MiwzNS42OTIgMTE1LjAxMiw0MS44MDAgMTE3LjYwNiBDIDQ0LjE5MyAxMTguNjIyLDU1LjIxNCAxMTkuMTU4LDU3Ljc5NSAxMTguMzg0IEMgNzMuMjY2IDExMy43NDMsNzcuMTg4IDk3LjQ5Miw2NS4xNzQgODcuODE2IEMgNjQuMDgzIDg2LjkzNyw1NC41NjkgODIuMDAwLDUzLjk2NyA4Mi4wMDAgQyA1My4zNDUgODIuMDAwLDQ4LjI5MiA3OC43MjAsNDcuMjAwIDc3LjYwNyBDIDQzLjAzNSA3My4zNjIsNDMuNzg5IDY2Ljk3MSw0OC44MDAgNjQuMDUzIEMgNTAuODYxIDYyLjg1Myw1OC4yMjQgNjIuNDY0LDU5LjI2MCA2My41MDAgQyA1OS41MzUgNjMuNzc1LDYwLjA0OCA2NC4wMDAsNjAuMzk5IDY0LjAwMCBDIDYwLjc1MSA2NC4wMDAsNjIuMjY4IDY0LjYzMCw2My43NzIgNjUuNDAwIEMgNjcuODQxIDY3LjQ4NCw2OC44MDAgNjcuMTQwLDY4LjgwMCA2My42MDAgQyA2OC44MDAgNjAuNjQ1LDY3Ljc4MCA1OS40ODEsNjMuNjAwIDU3LjY2MiBDIDU5LjgwMyA1Ni4wMTEsNTIuMDExIDU1LjUxMSw0OC40MDAgNTYuNjg3IE0xNTYuMzMwIDU2Ljc0OSBDIDE1NC44NjEgNTcuMTExLDE1My41MjYgNTcuNTQwLDE1My4zNjMgNTcuNzAzIEMgMTUzLjIwMCA1Ny44NjcsMTUyLjc2MyA1OC4wMDAsMTUyLjM5MyA1OC4wMDAgQyAxNDguMjUxIDU4LjAwMCwxNDAuMzI2IDY1LjM1MywxMzYuODcyIDcyLjQwMCBDIDEzMi40NjMgODEuMzk4LDEzMi43MjQgOTguNDcwLDEzNy4zNjkgMTA0LjgwMCBDIDEzNy42MTEgMTA1LjEzMCwxMzguMTUxIDEwNi4wMzAsMTM4LjU2OSAxMDYuODAwIEMgMTQwLjQ5NSAxMTAuMzQ2LDE0OC40MjMgMTE2LjgwMCwxNTAuODU0IDExNi44MDAgQyAxNTEuMDg4IDExNi44MDAsMTUxLjg0NiAxMTcuMDU1LDE1Mi41NDAgMTE3LjM2NiBDIDE1NS4zMzYgMTE4LjYyMywxNjYuMzE3IDExOS4yNTcsMTcwLjQwMCAxMTguMzk4IEMgMTczLjc0NCAxMTcuNjk1LDE3OS4zMjEgMTE1LjkxNSwxODAuMDMxIDExNS4zMjUgQyAxODAuMzc5IDExNS4wMzYsMTgwLjg1MyAxMTQuODAwLDE4MS4wODUgMTE0LjgwMCBDIDE4Mi45NzQgMTE0LjgwMCwxODMuOTAwIDg3LjUyMCwxODIuMDY5IDg1Ljg2MiBDIDE4MS4xMzEgODUuMDEzLDE2MC41MTQgODQuODQ2LDE1OS42ODAgODUuNjgwIEMgMTU4LjkzMSA4Ni40MjksMTU5LjA3NiA5MC4yNDYsMTU5Ljg4OSA5MS4xOTUgQyAxNjAuNTMxIDkxLjk0NiwxNjEuMDU5IDkyLjAwMCwxNjcuNjk3IDkyLjAwMCBMIDE3NC44MTYgOTIuMDAwIDE3NC43MDggMTAwLjY1NyBDIDE3NC42MTggMTA3Ljg4NywxNzQuNTAxIDEwOS4zNjAsMTc0LjAwMCAxMDkuNTk1IEMgMTczLjY3MCAxMDkuNzQ5LDE3My4wMDMgMTEwLjA4MCwxNzIuNTE3IDExMC4zMzAgQyAxNzIuMDMyIDExMC41ODAsMTcwLjkwMyAxMTAuOTAyLDE3MC4wMDkgMTExLjA0NSBDIDE2OS4xMTQgMTExLjE4OCwxNjguMjg2IDExMS40NjEsMTY4LjE2OCAxMTEuNjUzIEMgMTY3LjgyNiAxMTIuMjA1LDE2MC44MzUgMTEyLjAyOCwxNTguMjAwIDExMS4zOTkgQyAxNDMuNzMwIDEwNy45NDksMTM3LjQ0NyA4OC42MDQsMTQ1LjczMSA3My4wMTIgQyAxNDkuNzEwIDY1LjUyMywxNjAuMjMyIDYxLjAyOCwxNjguNjAwIDYzLjI0MiBDIDE2OS40ODAgNjMuNDc1LDE3MC43MjYgNjMuNzY2LDE3MS4zNjkgNjMuODg4IEMgMTcyLjQzMiA2NC4wOTEsMTc1LjQzMiA2NS41NDAsMTc5Ljg4MSA2Ny45OTkgQyAxODIuMjQyIDY5LjMwNCwxODIuODAwIDY4Ljc2OSwxODIuODAwIDY1LjIwNiBDIDE4Mi44MDAgNjIuODkzLDE4Mi42NjQgNjIuMzczLDE4MS44NDIgNjEuNTU1IEMgMTgwLjc2MCA2MC40NzYsMTc2LjI0OSA1OC4wMDAsMTc1LjM2NyA1OC4wMDAgQyAxNzUuMDQ5IDU4LjAwMCwxNzQuNDc3IDU3LjgzOCwxNzQuMDk1IDU3LjY0MCBDIDE3MC45OTcgNTYuMDM3LDE2MS4yMTYgNTUuNTQ2LDE1Ni4zMzAgNTYuNzQ5IE03Ny4yMDMgNTguNTAwIEMgNzcuMjA0IDU5LjIxNSw3Ny43NDkgNjEuMzMwLDc4LjQxMyA2My4yMDAgQyA3OS4wNzcgNjUuMDcwLDgwLjA1OCA2Ny44NjAsODAuNTk0IDY5LjQwMCBDIDgyLjY2NSA3NS4zNTksODMuNTE4IDc3LjY1Miw4My43NTUgNzcuODg4IEMgODMuODkwIDc4LjAyMyw4NC4wMDAgNzguNDQ4LDg0LjAwMCA3OC44MzQgQyA4NC4wMDAgNzkuMjE5LDg0LjM4MSA4MC40MDQsODQuODQ4IDgxLjQ2NyBDIDg1LjMxNCA4Mi41MzAsODUuODM1IDgzLjk0MCw4Ni4wMDYgODQuNjAwIEMgODYuMTc3IDg1LjI2MCw4Ny4wNzAgODcuODcwLDg3Ljk5MiA5MC40MDAgQyA4OC45MTMgOTIuOTMwLDg5LjkwNyA5NS43MjAsOTAuMjAwIDk2LjYwMCBDIDkwLjQ5MyA5Ny40ODAsOTEuNTQwIDEwMC40NTAsOTIuNTI3IDEwMy4yMDAgQyA5My41MTQgMTA1Ljk1MCw5NC41MzQgMTA4LjgzMCw5NC43OTQgMTA5LjYwMCBDIDk1LjA1MyAxMTAuMzcwLDk1LjQxMSAxMTEuMzYwLDk1LjU4NyAxMTEuODAwIEMgOTUuNzY0IDExMi4yNDAsOTYuMTQxIDExMy4zNzQsOTYuNDI1IDExNC4zMjAgQyA5Ny40MTcgMTE3LjYyNCw5OC4wNTMgMTE4LjAwMCwxMDIuNjUxIDExOC4wMDAgQyAxMDYuODM2IDExOC4wMDAsMTA4LjAwMCAxMTcuNTUxLDEwOC4wMDAgMTE1LjkzNSBDIDEwOC4wMDAgMTE1LjYwNCwxMDguMTIzIDExNS4yMTAsMTA4LjI3NCAxMTUuMDU5IEMgMTA4LjU4NiAxMTQuNzQ3LDEwOS4xMTcgMTEzLjMxOCwxMTAuODIyIDEwOC4yMDAgQyAxMTEuNDgxIDEwNi4yMjAsMTEyLjE4NSAxMDQuMjQwLDExMi4zODYgMTAzLjgwMCBDIDExMi41ODcgMTAzLjM2MCwxMTMuMzA2IDEwMS4zMjYsMTEzLjk4NSA5OS4yODAgQyAxMTQuNjYzIDk3LjIzNCwxMTUuMzc4IDk1LjI1NCwxMTUuNTcyIDk0Ljg4MCBDIDExNS43NjcgOTQuNTA2LDExNi4yMDEgOTMuMzAwLDExNi41MzggOTIuMjAwIEMgMTE3LjI2NCA4OS44MjMsMTE3Ljk1MiA4Ny44NDIsMTE4LjYyMCA4Ni4yMDAgQyAxMTguODg4IDg1LjU0MCwxMTkuMzMxIDg0LjI4MCwxMTkuNjAzIDgzLjQwMCBDIDExOS44NzUgODIuNTIwLDEyMC4yNTYgODEuNDg3LDEyMC40NDkgODEuMTA1IEMgMTIwLjY0MiA4MC43MjMsMTIwLjgwMCA4MC4yMTEsMTIwLjgwMCA3OS45NjYgQyAxMjAuODAwIDc5LjcyMSwxMjEuMDU4IDc4Ljk1NCwxMjEuMzc0IDc4LjI2MCBDIDEyMS42OTAgNzcuNTY3LDEyMi40OTEgNzUuMzgwLDEyMy4xNTMgNzMuNDAwIEMgMTI1LjcwNiA2NS43NjcsMTI3LjI0NiA2MS4zNjgsMTI3LjY0OCA2MC41NjUgQyAxMjcuODc4IDYwLjEwNiwxMjguMDA2IDU5LjIwNiwxMjcuOTMzIDU4LjU2NSBMIDEyNy44MDAgNTcuNDAwIDEyNC4zNjEgNTcuMjg1IEMgMTIxLjkyNSA1Ny4yMDQsMTIwLjc5OSA1Ny4zMjEsMTIwLjQ5OSA1Ny42ODUgQyAxMjAuMjY2IDU3Ljk2OCwxMTYuMzQyIDY5LjQwNSwxMTEuNzc5IDgzLjEwMCBDIDEwNi43NzUgOTguMTE4LDEwMy4yODcgMTA4LjAwMCwxMDIuOTg5IDEwOC4wMDAgQyAxMDIuNzE3IDEwOC4wMDAsMTAyLjIzMCAxMDcuMjM1LDEwMS45MDUgMTA2LjMwMCBDIDEwMS41ODEgMTA1LjM2NSw5OS45MjQgMTAwLjQ2MCw5OC4yMjMgOTUuNDAwIEMgOTYuNTIxIDkwLjM0MCw5NC45MDMgODUuNjYwLDk0LjYyNSA4NS4wMDAgQyA5NC4zNDggODQuMzQwLDkzLjgwOSA4Mi44MTAsOTMuNDI3IDgxLjYwMCBDIDkzLjA0NSA4MC4zOTAsOTIuNTkyIDc5LjA0MCw5Mi40MjEgNzguNjAwIEMgOTIuMjQ5IDc4LjE2MCw5MS43OTkgNzYuODEwLDkxLjQyMSA3NS42MDAgQyA5MS4wNDIgNzQuMzkwLDkwLjU5MiA3My4wNDAsOTAuNDIxIDcyLjYwMCBDIDkwLjI0OSA3Mi4xNjAsODkuNzk5IDcwLjgxMCw4OS40MjEgNjkuNjAwIEMgODkuMDQyIDY4LjM5MCw4OC41ODIgNjcuMDQwLDg4LjM5OCA2Ni42MDAgQyA4Ny40NTAgNjQuMzI4LDg1Ljk5OCA2MC4xMTAsODUuOTg3IDU5LjU5MiBDIDg1Ljk0NyA1Ny44MTYsODQuNjIxIDU3LjIwMCw4MC44MzYgNTcuMjAwIEwgNzcuMjAwIDU3LjIwMCA3Ny4yMDMgNTguNTAwIE0yMjEuMjAwIDE3My42MDAgQyAyMjAuODcwIDE3My44MTMsMjIwLjEwNCAxNzMuOTkxLDIxOS40OTggMTczLjk5NCBDIDIxOC44OTIgMTczLjk5NywyMTcuNDYzIDE3NC40NTAsMjE2LjMyMyAxNzUuMDAwIEMgMjE1LjE4MyAxNzUuNTUwLDIxNC4wOTAgMTc2LjAwMCwyMTMuODk1IDE3Ni4wMDAgQyAyMTAuMzkzIDE3Ni4wMDAsMjAxLjk3OSAxODUuNTE0LDE5OS41NzAgMTkyLjIwMCBDIDE5Ny4xMzkgMTk4Ljk0NiwxOTcuMTI3IDIxMS41ODUsMTk5LjU0NyAyMTcuODAwIEMgMjAxLjQ1OCAyMjIuNzEwLDIwNi41NzAgMjMwLjAwMCwyMDguMTAyIDIzMC4wMDAgQyAyMDguMjg0IDIzMC4wMDAsMjA4LjgyNyAyMzAuMzY2LDIwOS4zMDcgMjMwLjgxNCBDIDIxMC4zODEgMjMxLjgxNCwyMTQuNjg3IDIzNC4wMDAsMjE1LjU4NCAyMzQuMDAwIEMgMjE1Ljk0NSAyMzQuMDAwLDIxNi40MTEgMjM0LjE2NiwyMTYuNjIwIDIzNC4zNjkgQyAyMTguNzIzIDIzNi40MTMsMjMzLjAwMSAyMzYuNDAzLDIzOC4zMTkgMjM0LjM1NCBDIDIzOC44MjQgMjM0LjE1OSwyMzkuNDg3IDIzNC4wMDAsMjM5Ljc5MSAyMzQuMDAwIEMgMjQwLjg2NiAyMzQuMDAwLDI0NS41NzUgMjMxLjU3MSwyNDYuMTgzIDIzMC43MDIgQyAyNDcuMTI5IDIyOS4zNTIsMjQ3LjEwMyAyMDQuNDM0LDI0Ni4xNTQgMjAyLjk4NiBMIDI0NS41MDggMjAyLjAwMCAyMzQuODM0IDIwMi4wMDAgQyAyMjIuNzI4IDIwMi4wMDAsMjIzLjIwMCAyMDEuODcwLDIyMy4yMDAgMjA1LjIxOCBDIDIyMy4yMDAgMjA4Ljc1MiwyMjMuMzE1IDIwOC44MDAsMjMxLjczMSAyMDguODAwIEwgMjM4LjgwMCAyMDguODAwIDIzOC44MDAgMjE3LjMzOCBDIDIzOC44MDAgMjI3LjYxMiwyMzkuMzYxIDIyNi41NjQsMjMyLjg0NiAyMjguNDU1IEMgMjIzLjY0NSAyMzEuMTI1LDIxMi42MTkgMjI1Ljk4NSwyMDguNzAzIDIxNy4yMDAgQyAyMDIuMDQ2IDIwMi4yNjYsMjA4LjA3NiAxODUuMTYxLDIyMS42MDAgMTgwLjYxNiBDIDIyNi45NDYgMTc4LjgyMCwyMzkuNTA5IDE4MS4wNjEsMjQyLjgwMCAxODQuMzk3IEMgMjQ1LjE1NiAxODYuNzg1LDI0Ni43NjggMTg1Ljg2OSwyNDYuNzg3IDE4Mi4xMzEgQyAyNDYuODA0IDE3OC45MDQsMjQyLjI1OCAxNzQuODAwLDIzOC42NjYgMTc0LjgwMCBDIDIzOC4zMjYgMTc0LjgwMCwyMzcuOTM2IDE3NC42MjAsMjM3LjgwMCAxNzQuNDAwIEMgMjM3LjY2NCAxNzQuMTgwLDIzNi43NjQgMTc0LjAwMCwyMzUuODAwIDE3NC4wMDAgQyAyMzQuODM2IDE3NC4wMDAsMjMzLjkzNiAxNzMuODIwLDIzMy44MDAgMTczLjYwMCBDIDIzMy40NzkgMTczLjA4MCwyMjIuMDA1IDE3My4wODAsMjIxLjIwMCAxNzMuNjAwIE0zOS44NjIgMTc0LjczMSBDIDM5LjAwNCAxNzUuNjc5LDM4LjgyOCAyMzMuNDY4LDM5LjY4MCAyMzQuMzIwIEMgNDAuNDg5IDIzNS4xMjksNDYuMzk2IDIzNC45NTMsNDcuMDQzIDIzNC4xMDAgQyA0OC4wMDEgMjMyLjgzOCw0Ny44MzMgMTc1LjUzNSw0Ni44NjkgMTc0LjY2MiBDIDQ1Ljc4MCAxNzMuNjc3LDQwLjc3MSAxNzMuNzI3LDM5Ljg2MiAxNzQuNzMxIE02NC43MTMgMTc0LjcwMCBDIDYzLjIwNyAxNzYuNDI3LDYzLjIwMCAxNzYuNTY2LDYzLjIwMCAyMDUuNDk0IEMgNjMuMjAwIDIzNy43MjYsNjIuODAxIDIzNC44MDAsNjcuMjAwIDIzNC44MDAgQyA3MS41OTAgMjM0LjgwMCw3MS4yMDAgMjM3LjQyNCw3MS4yMDAgMjA3LjkyMCBDIDcxLjIwMCAxOTAuOTA3LDcxLjMzNyAxODIuMDAwLDcxLjYwMCAxODIuMDAwIEMgNzEuODIwIDE4Mi4wMDAsNzIuMDAwIDE4Mi4yNzIsNzIuMDAwIDE4Mi42MDUgQyA3Mi4wMDAgMTgyLjkzOCw3Mi4xNzEgMTgzLjUyMyw3Mi4zODEgMTgzLjkwNSBDIDcyLjgyMSAxODQuNzEwLDczLjY4NiAxODYuNzkyLDc0LjQxMyAxODguODAwIEMgNzQuNjkyIDE4OS41NzAsNzUuMTM5IDE5MC43NDAsNzUuNDA3IDE5MS40MDAgQyA3NS42NzUgMTkyLjA2MCw3Ni4zODggMTkzLjg2MCw3Ni45OTIgMTk1LjQwMCBDIDc3LjU5NyAxOTYuOTQwLDc4LjM0MSAxOTguNzY3LDc4LjY0NSAxOTkuNDYwIEMgNzguOTUwIDIwMC4xNTQsNzkuMjAwIDIwMC45MjEsNzkuMjAwIDIwMS4xNjYgQyA3OS4yMDAgMjAxLjQxMSw3OS4zNzQgMjAxLjkyMyw3OS41ODYgMjAyLjMwNSBDIDc5Ljc5OSAyMDIuNjg3LDgxLjE1MSAyMDYuMDYwLDgyLjU5MCAyMDkuODAwIEMgODQuMDMwIDIxMy41NDAsODUuMzg2IDIxNi45MTMsODUuNjA0IDIxNy4yOTUgQyA4NS44MjIgMjE3LjY3Nyw4Ni4wMDAgMjE4LjI2NCw4Ni4wMDAgMjE4LjYwMCBDIDg2LjAwMCAyMTguOTM2LDg2LjE3MSAyMTkuNTIzLDg2LjM4MSAyMTkuOTA1IEMgODYuODIxIDIyMC43MTAsODcuNjg2IDIyMi43OTIsODguNDEzIDIyNC44MDAgQyA4OC42OTIgMjI1LjU3MCw4OS4xNDMgMjI2Ljc0MCw4OS40MTQgMjI3LjQwMCBDIDg5LjY4NiAyMjguMDYwLDkwLjMwMCAyMjkuNjExLDkwLjc3OSAyMzAuODQ2IEMgOTIuMjY3IDIzNC42ODgsOTIuNDExIDIzNC44MDAsOTUuODUxIDIzNC44MDAgQyA5OS40OTkgMjM0LjgwMCw5OS4zODQgMjM0LjkwNSwxMDEuNTM3IDIyOS42MDAgQyAxMDIuNDc0IDIyNy4yOTAsMTAzLjM5MyAyMjUuMDQwLDEwMy41ODAgMjI0LjYwMCBDIDEwNC4yNDcgMjIzLjAyMywxMDUuMjYwIDIyMC41ODYsMTA1LjU3NCAyMTkuODAwIEMgMTA2LjQ2OCAyMTcuNTU5LDEwNi45MjUgMjE2LjQ5OCwxMDcuNDM3IDIxNS40NjggQyAxMDcuNzQ3IDIxNC44NDUsMTA4LjAwMCAyMTQuMTEzLDEwOC4wMDAgMjEzLjg0MiBDIDEwOC4wMDAgMjEzLjU3MSwxMDguNDUwIDIxMi40MTcsMTA5LjAwMCAyMTEuMjc3IEMgMTA5LjU1MCAyMTAuMTM3LDExMC4wMDAgMjA5LjA1NywxMTAuMDAwIDIwOC44NzcgQyAxMTAuMDAwIDIwOC42OTcsMTEwLjQ1MCAyMDcuNjE3LDExMS4wMDAgMjA2LjQ3NyBDIDExMS41NTAgMjA1LjMzNywxMTIuMDAwIDIwNC4yMjEsMTEyLjAwMCAyMDMuOTk3IEMgMTEyLjAwMCAyMDMuNzcyLDExMi4xNzUgMjAzLjI3NywxMTIuMzg4IDIwMi44OTUgQyAxMTIuNjAxIDIwMi41MTMsMTEzLjc3OCAxOTkuNjgwLDExNS4wMDQgMTk2LjYwMCBDIDExNi4yMzAgMTkzLjUyMCwxMTcuNDA1IDE5MC41OTUsMTE3LjYxNiAxOTAuMTAwIEMgMTE3LjgyNyAxODkuNjA1LDExOC4xNTkgMTg4Ljc5NSwxMTguMzU0IDE4OC4zMDAgQyAxMjEuNjQyIDE3OS45NTAsMTIxLjU4OCAxNzkuNTk5LDEyMS41OTUgMjA5LjQyMCBDIDEyMS41OTkgMjI3Ljg3NCwxMjEuNzE3IDIzMy45NTcsMTIyLjA4MCAyMzQuMzIwIEMgMTIyLjg0OSAyMzUuMDg5LDEyOC42NTMgMjM0Ljk2MSwxMjguOTU3IDIzNC4xNjcgQyAxMjkuMDkxIDIzMy44MTksMTI5LjIwMCAyMjAuNjE0LDEyOS4yMDAgMjA0LjgyMSBDIDEyOS4yMDAgMTcwLjQxMCwxMjkuOTI2IDE3NC4wMDAsMTIyLjk3MSAxNzQuMDAwIEwgMTE4LjQwMCAxNzQuMDAwIDExNi44ODggMTc1LjUxMiBDIDExNi4wNTYgMTc2LjM0NCwxMTUuMDM4IDE3Ny45MTksMTE0LjYyNiAxNzkuMDEyIEMgMTE0LjIxMyAxODAuMTA1LDExMy40MzUgMTgxLjk5MCwxMTIuODk2IDE4My4yMDAgQyAxMTIuMzU4IDE4NC40MTAsMTExLjc3MCAxODUuNzYwLDExMS41OTAgMTg2LjIwMCBDIDEwOS4zMTEgMTkxLjc3MCwxMDMuMzE0IDIwNi4yMjIsMTAyLjcxMCAyMDcuNjAwIEMgMTAxLjcxOSAyMDkuODU5LDEwMS43MjYgMjA5Ljg0Myw5OC45NDQgMjE2LjY3MiBDIDk3LjY3NCAyMTkuNzkyLDk2LjQ4NSAyMjIuMjUzLDk2LjMwMiAyMjIuMTQwIEMgOTUuODgzIDIyMS44ODEsOTQuMDAwIDIxOC4wMDQsOTQuMDAwIDIxNy40MDAgQyA5NC4wMDAgMjE3LjE1Miw5My41NTAgMjE2LjAxNyw5My4wMDAgMjE0Ljg3NyBDIDkyLjQ1MCAyMTMuNzM3LDkyLjAwMCAyMTIuNjIyLDkyLjAwMCAyMTIuNDAwIEMgOTIuMDAwIDIxMi4xNzgsOTEuNTUwIDIxMS4wNjMsOTEuMDAwIDIwOS45MjMgQyA5MC40NTAgMjA4Ljc4Myw5MC4wMDAgMjA3LjY0OCw5MC4wMDAgMjA3LjQwMCBDIDkwLjAwMCAyMDcuMTUyLDg5LjU1MCAyMDYuMDE3LDg5LjAwMCAyMDQuODc3IEMgODguNDUwIDIwMy43MzcsODguMDAwIDIwMi42MjIsODguMDAwIDIwMi40MDAgQyA4OC4wMDAgMjAyLjE3OCw4Ny41NTAgMjAxLjA2Myw4Ny4wMDAgMTk5LjkyMyBDIDg2LjQ1MCAxOTguNzgzLDg2LjAwMCAxOTcuNjQ4LDg2LjAwMCAxOTcuNDAwIEMgODYuMDAwIDE5Ny4xNTIsODUuNTUwIDE5Ni4wMTcsODUuMDAwIDE5NC44NzcgQyA4NC40NTAgMTkzLjczNyw4NC4wMDAgMTkyLjYyMiw4NC4wMDAgMTkyLjQwMCBDIDg0LjAwMCAxOTIuMTc4LDgzLjU1MCAxOTEuMDYzLDgzLjAwMCAxODkuOTIzIEMgODIuNDUwIDE4OC43ODMsODIuMDAwIDE4Ny42NDgsODIuMDAwIDE4Ny40MDAgQyA4Mi4wMDAgMTg3LjE1Miw4MS41NTAgMTg2LjAxNyw4MS4wMDAgMTg0Ljg3NyBDIDgwLjQ1MCAxODMuNzM3LDgwLjAwMCAxODIuNjI5LDgwLjAwMCAxODIuNDE2IEMgODAuMDAwIDE4MS43MjcsNzcuODA5IDE3Ni44NTcsNzcuMTAyIDE3NS45NzMgQyA3NS40OTAgMTczLjk2MSw2Ni4xOTIgMTczLjAwNSw2NC43MTMgMTc0LjcwMCBNMTYwLjc4MyAxNzQuNTEzIEMgMTYwLjA5NSAxNzUuMDU2LDE1OS4xODcgMTc2Ljg5NCwxNTguMjY5IDE3OS42MDAgQyAxNTcuOTMzIDE4MC41OTAsMTU3LjEyNiAxODIuODQwLDE1Ni40NzYgMTg0LjYwMCBDIDE1NS44MjYgMTg2LjM2MCwxNTQuOTc2IDE4OC43MDAsMTU0LjU4OCAxODkuODAwIEMgMTU0LjIwMCAxOTAuOTAwLDE1My40NTkgMTkyLjg0NywxNTIuOTQxIDE5NC4xMjYgQyAxNTIuNDI0IDE5NS40MDYsMTUyLjAwMCAxOTYuNzkwLDE1Mi4wMDAgMTk3LjIwMyBDIDE1Mi4wMDAgMTk3LjYxNSwxNTEuODQxIDE5OC4wNTEsMTUxLjY0OCAxOTguMTcwIEMgMTUxLjQ1NCAxOTguMjkwLDE1MS4xOTkgMTk4Ljc5NiwxNTEuMDgxIDE5OS4yOTQgQyAxNTAuOTYzIDE5OS43OTIsMTUwLjMwNiAyMDEuNzMwLDE0OS42MjEgMjAzLjYwMCBDIDE0OC45MzcgMjA1LjQ3MCwxNDcuOTk5IDIwOC4wODAsMTQ3LjUzOSAyMDkuNDAwIEMgMTQ3LjA3OCAyMTAuNzIwLDE0Ni41NDQgMjExLjk3MSwxNDYuMzUxIDIxMi4xODAgQyAxNDYuMTU4IDIxMi4zODksMTQ2LjAwMCAyMTIuODM1LDE0Ni4wMDAgMjEzLjE3MiBDIDE0Ni4wMDAgMjEzLjgxNSwxNDQuMjE3IDIxOC45MDcsMTQzLjU3NSAyMjAuMDk1IEMgMTQzLjM2OSAyMjAuNDc3LDE0My4xOTkgMjIxLjAxNywxNDMuMTk4IDIyMS4yOTUgQyAxNDMuMTk2IDIyMS41NzMsMTQyLjk2MyAyMjIuMjUwLDE0Mi42NzkgMjIyLjgwMCBDIDE0Mi4zOTUgMjIzLjM1MCwxNDEuODMxIDIyNC44ODAsMTQxLjQyNiAyMjYuMjAwIEMgMTQxLjAyMSAyMjcuNTIwLDE0MC41NjcgMjI4Ljc4MCwxNDAuNDE3IDIyOS4wMDAgQyAxMzkuODQwIDIyOS44NDUsMTM5LjEzMCAyMzIuNjg3LDEzOS4yNjIgMjMzLjYyMSBDIDEzOS4zOTUgMjM0LjU2MiwxMzkuNTMyIDIzNC42MDQsMTQyLjgzOSAyMzQuNzE1IEMgMTQ2LjcyNCAyMzQuODQ0LDE0Ni43NzEgMjM0LjgxNywxNDcuNzc2IDIzMS44MzAgQyAxNDguMTQwIDIzMC43NDYsMTQ4Ljc2OSAyMjkuMDM2LDE0OS4xNzQgMjI4LjAzMCBDIDE0OS41NzkgMjI3LjAyMywxNTAuMTkyIDIyNS4zMDAsMTUwLjUzNyAyMjQuMjAwIEMgMTUwLjg4MyAyMjMuMTAwLDE1MS40MjYgMjIxLjQ4MCwxNTEuNzQ1IDIyMC42MDAgTCAxNTIuMzI1IDIxOS4wMDAgMTY0LjEyMSAyMTguODk0IEMgMTc2LjA2OSAyMTguNzg3LDE3OC4wMDAgMjE4Ljk3MiwxNzguMDAwIDIyMC4yMjcgQyAxNzguMDAwIDIyMS4wMTEsMTgxLjc5MyAyMzEuNjc2LDE4Mi43MjEgMjMzLjUwMCBMIDE4My4zODIgMjM0LjgwMCAxODcuMDQ4IDIzNC44MDAgQyAxOTAuMDcyIDIzNC44MDAsMTkwLjc1OCAyMzQuNjg1LDE5MC45NjUgMjM0LjE0NiBDIDE5MS4yNzAgMjMzLjM1MywxOTAuODQ3IDIzMC44NzYsMTkwLjM1NSAyMzAuNTcyIEMgMTkwLjE2MCAyMzAuNDUxLDE5MC4wMDAgMjI5Ljk0OSwxOTAuMDAwIDIyOS40NTYgQyAxOTAuMDAwIDIyOC45NjMsMTg5Ljg0NSAyMjguMzg5LDE4OS42NTYgMjI4LjE4MCBDIDE4OS40NjcgMjI3Ljk3MSwxODguOTk1IDIyNi44MTAsMTg4LjYwOCAyMjUuNjAwIEMgMTg4LjIyMCAyMjQuMzkwLDE4Ny43MzEgMjIzLjA2NSwxODcuNTIxIDIyMi42NTcgQyAxODcuMzExIDIyMi4yNDgsMTg2LjgwMSAyMjAuODk4LDE4Ni4zODggMjE5LjY1NyBDIDE4NS45NzYgMjE4LjQxNSwxODUuMDc0IDIxNS44NzAsMTg0LjM4NiAyMTQuMDAwIEMgMTgzLjY5NyAyMTIuMTMwLDE4My4wMzcgMjEwLjE5MiwxODIuOTE5IDIwOS42OTQgQyAxODIuODAxIDIwOS4xOTYsMTgyLjU0NiAyMDguNjkwLDE4Mi4zNTIgMjA4LjU3MCBDIDE4Mi4xNTkgMjA4LjQ1MSwxODIuMDAxIDIwOC4wNDgsMTgyLjAwMSAyMDcuNjc2IEMgMTgyLjAwMiAyMDcuMzA0LDE4MS41NzcgMjA1LjkyMCwxODEuMDU2IDIwNC42MDAgQyAxODAuNTM2IDIwMy4yODAsMTc5Ljg5MSAyMDEuNTcwLDE3OS42MjMgMjAwLjgwMCBDIDE3OS4zNTQgMjAwLjAzMCwxNzguNTA2IDE5Ny42OTAsMTc3LjczOCAxOTUuNjAwIEMgMTc2Ljk3MCAxOTMuNTEwLDE3Ni4wNjcgMTkwLjk5MCwxNzUuNzMxIDE5MC4wMDAgQyAxNzUuMzk1IDE4OS4wMTAsMTc0Ljg5NiAxODcuNjYwLDE3NC42MjEgMTg3LjAwMCBDIDE3NC4zNDYgMTg2LjM0MCwxNzMuNzk5IDE4NC44MTAsMTczLjQwNSAxODMuNjAwIEMgMTczLjAxMSAxODIuMzkwLDE3Mi41MzMgMTgxLjIyOSwxNzIuMzQ0IDE4MS4wMjAgQyAxNzIuMTU1IDE4MC44MTEsMTcyLjAwMCAxODAuMzIxLDE3Mi4wMDAgMTc5LjkzMSBDIDE3Mi4wMDAgMTc4LjY5MSwxNzAuMTA1IDE3NC44ODQsMTY5LjI2MyAxNzQuNDM0IEMgMTY4LjE0NSAxNzMuODM1LDE2MS41NjMgMTczLjg5NiwxNjAuNzgzIDE3NC41MTMgTTI2My4yMjkgMTc1LjA1NCBDIDI2Mi4wMzMgMTc2LjU3NSwyNjEuOTEwIDIzMi41MTQsMjYzLjEwMCAyMzMuOTY1IEMgMjYzLjc5NiAyMzQuODEzLDI2My44ODcgMjM0LjgxOCwyNzkuODAwIDIzNC43MDkgTCAyOTUuODAwIDIzNC42MDAgMjk1LjkxOSAyMzEuODU4IEMgMjk2LjA5NCAyMjcuODMyLDI5Ni43NjkgMjI4LjAyOCwyODIuNjk0IDIyOC4wMTMgTCAyNzAuNzg3IDIyOC4wMDAgMjcwLjg5NCAyMTcuMTAwIEwgMjcxLjAwMCAyMDYuMjAwIDI4MS4yMDAgMjA2LjA5NyBDIDI5Mi43NDUgMjA1Ljk4MCwyOTIuNDAwIDIwNi4wODEsMjkyLjQwMCAyMDIuODAwIEMgMjkyLjQwMCAxOTkuMzQ1LDI5Mi42NTcgMTk5LjQyNywyODEuMTMzIDE5OS4yMDAgTCAyNzEuMDAwIDE5OS4wMDAgMjcxLjAwMCAxOTAuMDAwIEwgMjcxLjAwMCAxODEuMDAwIDI4Mi44OTMgMTgwLjg5NCBMIDI5NC43ODYgMTgwLjc4OCAyOTUuMzkzIDE3OS42MTQgQyAyOTYuMTUyIDE3OC4xNDYsMjk2LjE1OCAxNzcuMTUzLDI5NS40MjAgMTc1LjM4NyBMIDI5NC44NDEgMTc0LjAwMCAyNzkuNDQ5IDE3NC4wMDAgTCAyNjQuMDU4IDE3NC4wMDAgMjYzLjIyOSAxNzUuMDU0IE0xNjguNTk1IDE5My40MzAgQyAxNzAuMDUxIDE5Ny44MTMsMTcxLjM5OSAyMDEuNzYwLDE3MS41OTAgMjAyLjIwMCBDIDE3MS43ODEgMjAyLjY0MCwxNzIuMjQxIDIwMy45MDAsMTcyLjYxMSAyMDUuMDAwIEMgMTcyLjk4MiAyMDYuMTAwLDE3My40MjEgMjA3LjM2MCwxNzMuNTg3IDIwNy44MDAgQyAxNzQuMjcyIDIwOS42MTIsMTc0LjgwMCAyMTEuNDk4LDE3NC44MDAgMjEyLjEyOCBDIDE3NC44MDAgMjEyLjc0MCwxNzMuODgyIDIxMi44MDAsMTY0LjU3MyAyMTIuODAwIEwgMTU0LjM0NiAyMTIuODAwIDE1NC41OTYgMjExLjkwMCBDIDE1NC43MzQgMjExLjQwNSwxNTUuMDgyIDIxMC4zNzAsMTU1LjM3MSAyMDkuNjAwIEMgMTU1LjY1OSAyMDguODMwLDE1Ni4xMTAgMjA3LjQ4MCwxNTYuMzcyIDIwNi42MDAgQyAxNTYuNjM0IDIwNS43MjAsMTU3LjA4OSAyMDQuMzcwLDE1Ny4zODMgMjAzLjYwMCBDIDE1Ny42NzcgMjAyLjgzMCwxNTguMTk1IDIwMS4zMDAsMTU4LjUzNCAyMDAuMjAwIEMgMTU5LjI3MyAxOTcuNzk5LDE1OS45NjAgMTk1LjgyMiwxNjAuNjIwIDE5NC4yMDAgQyAxNjAuODg4IDE5My41NDAsMTYxLjMzNCAxOTIuMjgwLDE2MS42MDkgMTkxLjQwMCBDIDE2MS44ODUgMTkwLjUyMCwxNjIuMjU1IDE4OS40NDAsMTYyLjQzMSAxODkuMDAwIEMgMTYyLjYwNyAxODguNTYwLDE2My4xNTMgMTg2Ljk2NSwxNjMuNjQ0IDE4NS40NTYgTCAxNjQuNTM4IDE4Mi43MTIgMTY1LjI0MiAxODQuMDg2IEMgMTY1LjYzMCAxODQuODQxLDE2Ny4xMzggMTg5LjA0NiwxNjguNTk1IDE5My40MzAgIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNlYTFiMjEiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIGlkPSJwYXRoMSIgZD0iTTAuMDAwIDIwMC4wMDAgTCAwLjAwMCA0MDAuMDAwIDIwMC4wMDAgNDAwLjAwMCBMIDQwMC4wMDAgNDAwLjAwMCA0MDAuMDAwIDIwMC4wMDAgTCA0MDAuMDAwIDAuMDAwIDIwMC4wMDAgMC4wMDAgTCAwLjAwMCAwLjAwMCAwLjAwMCAyMDAuMDAwIE02MC4xNDIgNTYuNjE0IEMgNjYuNTA1IDU4LjIwMyw2OC44MDAgNjAuMDU0LDY4LjgwMCA2My42MDAgQyA2OC44MDAgNjcuMTQwLDY3Ljg0MSA2Ny40ODQsNjMuNzcyIDY1LjQwMCBDIDYyLjI2OCA2NC42MzAsNjAuNzUxIDY0LjAwMCw2MC4zOTkgNjQuMDAwIEMgNjAuMDQ4IDY0LjAwMCw1OS41MzUgNjMuNzc1LDU5LjI2MCA2My41MDAgQyA1OC4yMjQgNjIuNDY0LDUwLjg2MSA2Mi44NTMsNDguODAwIDY0LjA1MyBDIDQzLjc4OSA2Ni45NzEsNDMuMDM1IDczLjM2Miw0Ny4yMDAgNzcuNjA3IEMgNDguMjkyIDc4LjcyMCw1My4zNDUgODIuMDAwLDUzLjk2NyA4Mi4wMDAgQyA1NC41NjkgODIuMDAwLDY0LjA4MyA4Ni45MzcsNjUuMTc0IDg3LjgxNiBDIDc3LjE4OCA5Ny40OTIsNzMuMjY2IDExMy43NDMsNTcuNzk1IDExOC4zODQgQyA1NS4yMTQgMTE5LjE1OCw0NC4xOTMgMTE4LjYyMiw0MS44MDAgMTE3LjYwNiBDIDM1LjY5MiAxMTUuMDEyLDM0LjgwMCAxMTQuMTQyLDM0LjgwMCAxMTAuNzc5IEMgMzQuODAwIDEwNy4wNTEsMzUuODQ3IDEwNi4yMTAsMzguMzM4IDEwNy45MzUgQyAzOC45MjIgMTA4LjMzOSwzOS42NzAgMTA4Ljc4OCw0MC4wMDAgMTA4LjkzMiBDIDQwLjMzMCAxMDkuMDc3LDQwLjg3MCAxMDkuMzU1LDQxLjIwMCAxMDkuNTUxIEMgNDIuMTA2IDExMC4wODksNDMuNjAxIDExMC43MTEsNDUuNjAwIDExMS4zODMgQyA0Ny42MDggMTEyLjA1OCw1NS43OTggMTEyLjI1MCw1Ni4xODEgMTExLjYzMSBDIDU2LjMwNiAxMTEuNDI4LDU2LjkyOCAxMTEuMTQ4LDU3LjU2MiAxMTEuMDA4IEMgNTguMTk3IDExMC44NjksNTkuNDEwIDExMC4wOTAsNjAuMjU4IDEwOS4yNzcgQyA2Ni4zMTEgMTAzLjQ3OCw2My44OTMgOTUuNjI2LDU0LjgwMCA5MS41NTQgQyA0Mi41MjAgODYuMDUzLDM4LjI2NyA4Mi40MzUsMzYuNjIyIDc2LjA4NSBDIDMzLjI5MiA2My4yMzQsNDUuNjU4IDUyLjk5Nyw2MC4xNDIgNTYuNjE0IE0xNzAuNDAwIDU2LjYzNSBDIDE3Mi4wNTAgNTYuOTkwLDE3My43MTMgNTcuNDQzLDE3NC4wOTUgNTcuNjQwIEMgMTc0LjQ3NyA1Ny44MzgsMTc1LjA0OSA1OC4wMDAsMTc1LjM2NyA1OC4wMDAgQyAxNzYuMjQ5IDU4LjAwMCwxODAuNzYwIDYwLjQ3NiwxODEuODQyIDYxLjU1NSBDIDE4Mi42NjQgNjIuMzczLDE4Mi44MDAgNjIuODkzLDE4Mi44MDAgNjUuMjA2IEMgMTgyLjgwMCA2OC43NjksMTgyLjI0MiA2OS4zMDQsMTc5Ljg4MSA2Ny45OTkgQyAxNzUuNDMyIDY1LjU0MCwxNzIuNDMyIDY0LjA5MSwxNzEuMzY5IDYzLjg4OCBDIDE3MC43MjYgNjMuNzY2LDE2OS40ODAgNjMuNDc1LDE2OC42MDAgNjMuMjQyIEMgMTYwLjIzMiA2MS4wMjgsMTQ5LjcxMCA2NS41MjMsMTQ1LjczMSA3My4wMTIgQyAxMzcuNDQ3IDg4LjYwNCwxNDMuNzMwIDEwNy45NDksMTU4LjIwMCAxMTEuMzk5IEMgMTYwLjgzNSAxMTIuMDI4LDE2Ny44MjYgMTEyLjIwNSwxNjguMTY4IDExMS42NTMgQyAxNjguMjg2IDExMS40NjEsMTY5LjExNCAxMTEuMTg4LDE3MC4wMDkgMTExLjA0NSBDIDE3MC45MDMgMTEwLjkwMiwxNzIuMDMyIDExMC41ODAsMTcyLjUxNyAxMTAuMzMwIEMgMTczLjAwMyAxMTAuMDgwLDE3My42NzAgMTA5Ljc0OSwxNzQuMDAwIDEwOS41OTUgQyAxNzQuNTAxIDEwOS4zNjAsMTc0LjYxOCAxMDcuODg3LDE3NC43MDggMTAwLjY1NyBMIDE3NC44MTYgOTIuMDAwIDE2Ny42OTcgOTIuMDAwIEMgMTYxLjA1OSA5Mi4wMDAsMTYwLjUzMSA5MS45NDYsMTU5Ljg4OSA5MS4xOTUgQyAxNTkuMDc2IDkwLjI0NiwxNTguOTMxIDg2LjQyOSwxNTkuNjgwIDg1LjY4MCBDIDE2MC41MTQgODQuODQ2LDE4MS4xMzEgODUuMDEzLDE4Mi4wNjkgODUuODYyIEMgMTgzLjkwMCA4Ny41MjAsMTgyLjk3NCAxMTQuODAwLDE4MS4wODUgMTE0LjgwMCBDIDE4MC44NTMgMTE0LjgwMCwxODAuMzc5IDExNS4wMzYsMTgwLjAzMSAxMTUuMzI1IEMgMTc5LjMyMSAxMTUuOTE1LDE3My43NDQgMTE3LjY5NSwxNzAuNDAwIDExOC4zOTggQyAxNjYuMzE3IDExOS4yNTcsMTU1LjMzNiAxMTguNjIzLDE1Mi41NDAgMTE3LjM2NiBDIDE1MS44NDYgMTE3LjA1NSwxNTEuMDg4IDExNi44MDAsMTUwLjg1NCAxMTYuODAwIEMgMTQ4LjQyMyAxMTYuODAwLDE0MC40OTUgMTEwLjM0NiwxMzguNTY5IDEwNi44MDAgQyAxMzguMTUxIDEwNi4wMzAsMTM3LjYxMSAxMDUuMTMwLDEzNy4zNjkgMTA0LjgwMCBDIDEzMi43MjQgOTguNDcwLDEzMi40NjMgODEuMzk4LDEzNi44NzIgNzIuNDAwIEMgMTQwLjMyNiA2NS4zNTMsMTQ4LjI1MSA1OC4wMDAsMTUyLjM5MyA1OC4wMDAgQyAxNTIuNzYzIDU4LjAwMCwxNTMuMjAwIDU3Ljg2NywxNTMuMzYzIDU3LjcwMyBDIDE1NC44NTkgNTYuMjA4LDE2NS4zNTUgNTUuNTUwLDE3MC40MDAgNTYuNjM1IE04NS4yMjMgNTguMTAwIEMgODUuNjM2IDU4LjU5NSw4NS45NzkgNTkuMjY2LDg1Ljk4NyA1OS41OTIgQyA4NS45OTggNjAuMTEwLDg3LjQ1MCA2NC4zMjgsODguMzk4IDY2LjYwMCBDIDg4LjU4MiA2Ny4wNDAsODkuMDQyIDY4LjM5MCw4OS40MjEgNjkuNjAwIEMgODkuNzk5IDcwLjgxMCw5MC4yNDkgNzIuMTYwLDkwLjQyMSA3Mi42MDAgQyA5MC41OTIgNzMuMDQwLDkxLjA0MiA3NC4zOTAsOTEuNDIxIDc1LjYwMCBDIDkxLjc5OSA3Ni44MTAsOTIuMjQ5IDc4LjE2MCw5Mi40MjEgNzguNjAwIEMgOTIuNTkyIDc5LjA0MCw5My4wNDUgODAuMzkwLDkzLjQyNyA4MS42MDAgQyA5My44MDkgODIuODEwLDk0LjM0OCA4NC4zNDAsOTQuNjI1IDg1LjAwMCBDIDk0LjkwMyA4NS42NjAsOTYuNTIxIDkwLjM0MCw5OC4yMjMgOTUuNDAwIEMgOTkuOTI0IDEwMC40NjAsMTAxLjU4MSAxMDUuMzY1LDEwMS45MDUgMTA2LjMwMCBDIDEwMi4yMzAgMTA3LjIzNSwxMDIuNzE3IDEwOC4wMDAsMTAyLjk4OSAxMDguMDAwIEMgMTAzLjI4NyAxMDguMDAwLDEwNi43NzUgOTguMTE4LDExMS43NzkgODMuMTAwIEMgMTE2LjM0MiA2OS40MDUsMTIwLjI2NiA1Ny45NjgsMTIwLjQ5OSA1Ny42ODUgQyAxMjAuNzk5IDU3LjMyMSwxMjEuOTI1IDU3LjIwNCwxMjQuMzYxIDU3LjI4NSBMIDEyNy44MDAgNTcuNDAwIDEyNy45MzMgNTguNTY1IEMgMTI4LjAwNiA1OS4yMDYsMTI3Ljg3OCA2MC4xMDYsMTI3LjY0OCA2MC41NjUgQyAxMjcuMjQ2IDYxLjM2OCwxMjUuNzA2IDY1Ljc2NywxMjMuMTUzIDczLjQwMCBDIDEyMi40OTEgNzUuMzgwLDEyMS42OTAgNzcuNTY3LDEyMS4zNzQgNzguMjYwIEMgMTIxLjA1OCA3OC45NTQsMTIwLjgwMCA3OS43MjEsMTIwLjgwMCA3OS45NjYgQyAxMjAuODAwIDgwLjIxMSwxMjAuNjQyIDgwLjcyMywxMjAuNDQ5IDgxLjEwNSBDIDEyMC4yNTYgODEuNDg3LDExOS44NzUgODIuNTIwLDExOS42MDMgODMuNDAwIEMgMTE5LjMzMSA4NC4yODAsMTE4Ljg4OCA4NS41NDAsMTE4LjYyMCA4Ni4yMDAgQyAxMTcuOTUyIDg3Ljg0MiwxMTcuMjY0IDg5LjgyMywxMTYuNTM4IDkyLjIwMCBDIDExNi4yMDEgOTMuMzAwLDExNS43NjcgOTQuNTA2LDExNS41NzIgOTQuODgwIEMgMTE1LjM3OCA5NS4yNTQsMTE0LjY2MyA5Ny4yMzQsMTEzLjk4NSA5OS4yODAgQyAxMTMuMzA2IDEwMS4zMjYsMTEyLjU4NyAxMDMuMzYwLDExMi4zODYgMTAzLjgwMCBDIDExMi4xODUgMTA0LjI0MCwxMTEuNDgxIDEwNi4yMjAsMTEwLjgyMiAxMDguMjAwIEMgMTA5LjExNyAxMTMuMzE4LDEwOC41ODYgMTE0Ljc0NywxMDguMjc0IDExNS4wNTkgQyAxMDguMTIzIDExNS4yMTAsMTA4LjAwMCAxMTUuNjA0LDEwOC4wMDAgMTE1LjkzNSBDIDEwOC4wMDAgMTE3LjU1MSwxMDYuODM2IDExOC4wMDAsMTAyLjY1MSAxMTguMDAwIEMgOTguMDUzIDExOC4wMDAsOTcuNDE3IDExNy42MjQsOTYuNDI1IDExNC4zMjAgQyA5Ni4xNDEgMTEzLjM3NCw5NS43NjQgMTEyLjI0MCw5NS41ODcgMTExLjgwMCBDIDk1LjQxMSAxMTEuMzYwLDk1LjA1MyAxMTAuMzcwLDk0Ljc5NCAxMDkuNjAwIEMgOTQuNTM0IDEwOC44MzAsOTMuNTE0IDEwNS45NTAsOTIuNTI3IDEwMy4yMDAgQyA5MS41NDAgMTAwLjQ1MCw5MC40OTMgOTcuNDgwLDkwLjIwMCA5Ni42MDAgQyA4OS45MDcgOTUuNzIwLDg4LjkxMyA5Mi45MzAsODcuOTkyIDkwLjQwMCBDIDg3LjA3MCA4Ny44NzAsODYuMTc3IDg1LjI2MCw4Ni4wMDYgODQuNjAwIEMgODUuODM1IDgzLjk0MCw4NS4zMTQgODIuNTMwLDg0Ljg0OCA4MS40NjcgQyA4NC4zODEgODAuNDA0LDg0LjAwMCA3OS4yMTksODQuMDAwIDc4LjgzNCBDIDg0LjAwMCA3OC40NDgsODMuODkwIDc4LjAyMyw4My43NTUgNzcuODg4IEMgODMuNTE4IDc3LjY1Miw4Mi42NjUgNzUuMzU5LDgwLjU5NCA2OS40MDAgQyA4MC4wNTggNjcuODYwLDc5LjA3NyA2NS4wNzAsNzguNDEzIDYzLjIwMCBDIDc3Ljc0OSA2MS4zMzAsNzcuMjA0IDU5LjIxNSw3Ny4yMDMgNTguNTAwIEwgNzcuMjAwIDU3LjIwMCA4MC44MzYgNTcuMjAwIEMgODQuMTE3IDU3LjIwMCw4NC41NDUgNTcuMjg4LDg1LjIyMyA1OC4xMDAgTTIzMy44MDAgMTczLjYwMCBDIDIzMy45MzYgMTczLjgyMCwyMzQuODM2IDE3NC4wMDAsMjM1LjgwMCAxNzQuMDAwIEMgMjM2Ljc2NCAxNzQuMDAwLDIzNy42NjQgMTc0LjE4MCwyMzcuODAwIDE3NC40MDAgQyAyMzcuOTM2IDE3NC42MjAsMjM4LjMyNiAxNzQuODAwLDIzOC42NjYgMTc0LjgwMCBDIDI0Mi4yNTggMTc0LjgwMCwyNDYuODA0IDE3OC45MDQsMjQ2Ljc4NyAxODIuMTMxIEMgMjQ2Ljc2OCAxODUuODY5LDI0NS4xNTYgMTg2Ljc4NSwyNDIuODAwIDE4NC4zOTcgQyAyMzkuNTA5IDE4MS4wNjEsMjI2Ljk0NiAxNzguODIwLDIyMS42MDAgMTgwLjYxNiBDIDIwOC4wNzYgMTg1LjE2MSwyMDIuMDQ2IDIwMi4yNjYsMjA4LjcwMyAyMTcuMjAwIEMgMjEyLjYxOSAyMjUuOTg1LDIyMy42NDUgMjMxLjEyNSwyMzIuODQ2IDIyOC40NTUgQyAyMzkuMzYxIDIyNi41NjQsMjM4LjgwMCAyMjcuNjEyLDIzOC44MDAgMjE3LjMzOCBMIDIzOC44MDAgMjA4LjgwMCAyMzEuNzMxIDIwOC44MDAgQyAyMjMuMzE1IDIwOC44MDAsMjIzLjIwMCAyMDguNzUyLDIyMy4yMDAgMjA1LjIxOCBDIDIyMy4yMDAgMjAxLjg3MCwyMjIuNzI4IDIwMi4wMDAsMjM0LjgzNCAyMDIuMDAwIEwgMjQ1LjUwOCAyMDIuMDAwIDI0Ni4xNTQgMjAyLjk4NiBDIDI0Ny4xMDMgMjA0LjQzNCwyNDcuMTI5IDIyOS4zNTIsMjQ2LjE4MyAyMzAuNzAyIEMgMjQ1LjU3NSAyMzEuNTcxLDI0MC44NjYgMjM0LjAwMCwyMzkuNzkxIDIzNC4wMDAgQyAyMzkuNDg3IDIzNC4wMDAsMjM4LjgyNCAyMzQuMTU5LDIzOC4zMTkgMjM0LjM1NCBDIDIzMy4wMDEgMjM2LjQwMywyMTguNzIzIDIzNi40MTMsMjE2LjYyMCAyMzQuMzY5IEMgMjE2LjQxMSAyMzQuMTY2LDIxNS45NDUgMjM0LjAwMCwyMTUuNTg0IDIzNC4wMDAgQyAyMTQuNjg3IDIzNC4wMDAsMjEwLjM4MSAyMzEuODE0LDIwOS4zMDcgMjMwLjgxNCBDIDIwOC44MjcgMjMwLjM2NiwyMDguMjg0IDIzMC4wMDAsMjA4LjEwMiAyMzAuMDAwIEMgMjA2LjU3MCAyMzAuMDAwLDIwMS40NTggMjIyLjcxMCwxOTkuNTQ3IDIxNy44MDAgQyAxOTcuMTI3IDIxMS41ODUsMTk3LjEzOSAxOTguOTQ2LDE5OS41NzAgMTkyLjIwMCBDIDIwMS45NzkgMTg1LjUxNCwyMTAuMzkzIDE3Ni4wMDAsMjEzLjg5NSAxNzYuMDAwIEMgMjE0LjA5MCAxNzYuMDAwLDIxNS4xODMgMTc1LjU1MCwyMTYuMzIzIDE3NS4wMDAgQyAyMTcuNDYzIDE3NC40NTAsMjE4Ljg5MiAxNzMuOTk3LDIxOS40OTggMTczLjk5NCBDIDIyMC4xMDQgMTczLjk5MSwyMjAuODcwIDE3My44MTMsMjIxLjIwMCAxNzMuNjAwIEMgMjIyLjAwNSAxNzMuMDgwLDIzMy40NzkgMTczLjA4MCwyMzMuODAwIDE3My42MDAgTTQ2Ljg2OSAxNzQuNjYyIEMgNDcuODMzIDE3NS41MzUsNDguMDAxIDIzMi44MzgsNDcuMDQzIDIzNC4xMDAgQyA0Ni4zOTYgMjM0Ljk1Myw0MC40ODkgMjM1LjEyOSwzOS42ODAgMjM0LjMyMCBDIDM4LjgyOCAyMzMuNDY4LDM5LjAwNCAxNzUuNjc5LDM5Ljg2MiAxNzQuNzMxIEMgNDAuNzcxIDE3My43MjcsNDUuNzgwIDE3My42NzcsNDYuODY5IDE3NC42NjIgTTc1LjIzOSAxNzQuNjczIEMgNzUuOTg3IDE3NS4wNDQsNzYuODI2IDE3NS42MjksNzcuMTAyIDE3NS45NzMgQyA3Ny44MDkgMTc2Ljg1Nyw4MC4wMDAgMTgxLjcyNyw4MC4wMDAgMTgyLjQxNiBDIDgwLjAwMCAxODIuNjI5LDgwLjQ1MCAxODMuNzM3LDgxLjAwMCAxODQuODc3IEMgODEuNTUwIDE4Ni4wMTcsODIuMDAwIDE4Ny4xNTIsODIuMDAwIDE4Ny40MDAgQyA4Mi4wMDAgMTg3LjY0OCw4Mi40NTAgMTg4Ljc4Myw4My4wMDAgMTg5LjkyMyBDIDgzLjU1MCAxOTEuMDYzLDg0LjAwMCAxOTIuMTc4LDg0LjAwMCAxOTIuNDAwIEMgODQuMDAwIDE5Mi42MjIsODQuNDUwIDE5My43MzcsODUuMDAwIDE5NC44NzcgQyA4NS41NTAgMTk2LjAxNyw4Ni4wMDAgMTk3LjE1Miw4Ni4wMDAgMTk3LjQwMCBDIDg2LjAwMCAxOTcuNjQ4LDg2LjQ1MCAxOTguNzgzLDg3LjAwMCAxOTkuOTIzIEMgODcuNTUwIDIwMS4wNjMsODguMDAwIDIwMi4xNzgsODguMDAwIDIwMi40MDAgQyA4OC4wMDAgMjAyLjYyMiw4OC40NTAgMjAzLjczNyw4OS4wMDAgMjA0Ljg3NyBDIDg5LjU1MCAyMDYuMDE3LDkwLjAwMCAyMDcuMTUyLDkwLjAwMCAyMDcuNDAwIEMgOTAuMDAwIDIwNy42NDgsOTAuNDUwIDIwOC43ODMsOTEuMDAwIDIwOS45MjMgQyA5MS41NTAgMjExLjA2Myw5Mi4wMDAgMjEyLjE3OCw5Mi4wMDAgMjEyLjQwMCBDIDkyLjAwMCAyMTIuNjIyLDkyLjQ1MCAyMTMuNzM3LDkzLjAwMCAyMTQuODc3IEMgOTMuNTUwIDIxNi4wMTcsOTQuMDAwIDIxNy4xNTIsOTQuMDAwIDIxNy40MDAgQyA5NC4wMDAgMjE4LjAwNCw5NS44ODMgMjIxLjg4MSw5Ni4zMDIgMjIyLjE0MCBDIDk2LjQ4NSAyMjIuMjUzLDk3LjY3NCAyMTkuNzkyLDk4Ljk0NCAyMTYuNjcyIEMgMTAxLjcyNiAyMDkuODQzLDEwMS43MTkgMjA5Ljg1OSwxMDIuNzEwIDIwNy42MDAgQyAxMDMuMzE0IDIwNi4yMjIsMTA5LjMxMSAxOTEuNzcwLDExMS41OTAgMTg2LjIwMCBDIDExMS43NzAgMTg1Ljc2MCwxMTIuMzU4IDE4NC40MTAsMTEyLjg5NiAxODMuMjAwIEMgMTEzLjQzNSAxODEuOTkwLDExNC4yMTMgMTgwLjEwNSwxMTQuNjI2IDE3OS4wMTIgQyAxMTUuMDM4IDE3Ny45MTksMTE2LjA1NiAxNzYuMzQ0LDExNi44ODggMTc1LjUxMiBMIDExOC40MDAgMTc0LjAwMCAxMjIuOTcxIDE3NC4wMDAgQyAxMjkuOTI2IDE3NC4wMDAsMTI5LjIwMCAxNzAuNDEwLDEyOS4yMDAgMjA0LjgyMSBDIDEyOS4yMDAgMjIwLjYxNCwxMjkuMDkxIDIzMy44MTksMTI4Ljk1NyAyMzQuMTY3IEMgMTI4LjY1MyAyMzQuOTYxLDEyMi44NDkgMjM1LjA4OSwxMjIuMDgwIDIzNC4zMjAgQyAxMjEuNzE3IDIzMy45NTcsMTIxLjU5OSAyMjcuODc0LDEyMS41OTUgMjA5LjQyMCBDIDEyMS41ODggMTc5LjU5OSwxMjEuNjQyIDE3OS45NTAsMTE4LjM1NCAxODguMzAwIEMgMTE4LjE1OSAxODguNzk1LDExNy44MjcgMTg5LjYwNSwxMTcuNjE2IDE5MC4xMDAgQyAxMTcuNDA1IDE5MC41OTUsMTE2LjIzMCAxOTMuNTIwLDExNS4wMDQgMTk2LjYwMCBDIDExMy43NzggMTk5LjY4MCwxMTIuNjAxIDIwMi41MTMsMTEyLjM4OCAyMDIuODk1IEMgMTEyLjE3NSAyMDMuMjc3LDExMi4wMDAgMjAzLjc3MiwxMTIuMDAwIDIwMy45OTcgQyAxMTIuMDAwIDIwNC4yMjEsMTExLjU1MCAyMDUuMzM3LDExMS4wMDAgMjA2LjQ3NyBDIDExMC40NTAgMjA3LjYxNywxMTAuMDAwIDIwOC42OTcsMTEwLjAwMCAyMDguODc3IEMgMTEwLjAwMCAyMDkuMDU3LDEwOS41NTAgMjEwLjEzNywxMDkuMDAwIDIxMS4yNzcgQyAxMDguNDUwIDIxMi40MTcsMTA4LjAwMCAyMTMuNTcxLDEwOC4wMDAgMjEzLjg0MiBDIDEwOC4wMDAgMjE0LjExMywxMDcuNzQ3IDIxNC44NDUsMTA3LjQzNyAyMTUuNDY4IEMgMTA2LjkyNSAyMTYuNDk4LDEwNi40NjggMjE3LjU1OSwxMDUuNTc0IDIxOS44MDAgQyAxMDUuMjYwIDIyMC41ODYsMTA0LjI0NyAyMjMuMDIzLDEwMy41ODAgMjI0LjYwMCBDIDEwMy4zOTMgMjI1LjA0MCwxMDIuNDc0IDIyNy4yOTAsMTAxLjUzNyAyMjkuNjAwIEMgOTkuMzg0IDIzNC45MDUsOTkuNDk5IDIzNC44MDAsOTUuODUxIDIzNC44MDAgQyA5Mi40MTEgMjM0LjgwMCw5Mi4yNjcgMjM0LjY4OCw5MC43NzkgMjMwLjg0NiBDIDkwLjMwMCAyMjkuNjExLDg5LjY4NiAyMjguMDYwLDg5LjQxNCAyMjcuNDAwIEMgODkuMTQzIDIyNi43NDAsODguNjkyIDIyNS41NzAsODguNDEzIDIyNC44MDAgQyA4Ny42ODYgMjIyLjc5Miw4Ni44MjEgMjIwLjcxMCw4Ni4zODEgMjE5LjkwNSBDIDg2LjE3MSAyMTkuNTIzLDg2LjAwMCAyMTguOTM2LDg2LjAwMCAyMTguNjAwIEMgODYuMDAwIDIxOC4yNjQsODUuODIyIDIxNy42NzcsODUuNjA0IDIxNy4yOTUgQyA4NS4zODYgMjE2LjkxMyw4NC4wMzAgMjEzLjU0MCw4Mi41OTAgMjA5LjgwMCBDIDgxLjE1MSAyMDYuMDYwLDc5Ljc5OSAyMDIuNjg3LDc5LjU4NiAyMDIuMzA1IEMgNzkuMzc0IDIwMS45MjMsNzkuMjAwIDIwMS40MTEsNzkuMjAwIDIwMS4xNjYgQyA3OS4yMDAgMjAwLjkyMSw3OC45NTAgMjAwLjE1NCw3OC42NDUgMTk5LjQ2MCBDIDc4LjM0MSAxOTguNzY3LDc3LjU5NyAxOTYuOTQwLDc2Ljk5MiAxOTUuNDAwIEMgNzYuMzg4IDE5My44NjAsNzUuNjc1IDE5Mi4wNjAsNzUuNDA3IDE5MS40MDAgQyA3NS4xMzkgMTkwLjc0MCw3NC42OTIgMTg5LjU3MCw3NC40MTMgMTg4LjgwMCBDIDczLjY4NiAxODYuNzkyLDcyLjgyMSAxODQuNzEwLDcyLjM4MSAxODMuOTA1IEMgNzIuMTcxIDE4My41MjMsNzIuMDAwIDE4Mi45MzgsNzIuMDAwIDE4Mi42MDUgQyA3Mi4wMDAgMTgyLjI3Miw3MS44MjAgMTgyLjAwMCw3MS42MDAgMTgyLjAwMCBDIDcxLjMzNyAxODIuMDAwLDcxLjIwMCAxOTAuOTA3LDcxLjIwMCAyMDcuOTIwIEMgNzEuMjAwIDIzNy40MjQsNzEuNTkwIDIzNC44MDAsNjcuMjAwIDIzNC44MDAgQyA2Mi44MDEgMjM0LjgwMCw2My4yMDAgMjM3LjcyNiw2My4yMDAgMjA1LjQ5NCBDIDYzLjIwMCAxNzYuNTY2LDYzLjIwNyAxNzYuNDI3LDY0LjcxMyAxNzQuNzAwIEMgNjUuNTg0IDE3My43MDIsNzMuMjM2IDE3My42ODMsNzUuMjM5IDE3NC42NzMgTTE2OS4yNjMgMTc0LjQzNCBDIDE3MC4xMDUgMTc0Ljg4NCwxNzIuMDAwIDE3OC42OTEsMTcyLjAwMCAxNzkuOTMxIEMgMTcyLjAwMCAxODAuMzIxLDE3Mi4xNTUgMTgwLjgxMSwxNzIuMzQ0IDE4MS4wMjAgQyAxNzIuNTMzIDE4MS4yMjksMTczLjAxMSAxODIuMzkwLDE3My40MDUgMTgzLjYwMCBDIDE3My43OTkgMTg0LjgxMCwxNzQuMzQ2IDE4Ni4zNDAsMTc0LjYyMSAxODcuMDAwIEMgMTc0Ljg5NiAxODcuNjYwLDE3NS4zOTUgMTg5LjAxMCwxNzUuNzMxIDE5MC4wMDAgQyAxNzYuMDY3IDE5MC45OTAsMTc2Ljk3MCAxOTMuNTEwLDE3Ny43MzggMTk1LjYwMCBDIDE3OC41MDYgMTk3LjY5MCwxNzkuMzU0IDIwMC4wMzAsMTc5LjYyMyAyMDAuODAwIEMgMTc5Ljg5MSAyMDEuNTcwLDE4MC41MzYgMjAzLjI4MCwxODEuMDU2IDIwNC42MDAgQyAxODEuNTc3IDIwNS45MjAsMTgyLjAwMiAyMDcuMzA0LDE4Mi4wMDEgMjA3LjY3NiBDIDE4Mi4wMDEgMjA4LjA0OCwxODIuMTU5IDIwOC40NTEsMTgyLjM1MiAyMDguNTcwIEMgMTgyLjU0NiAyMDguNjkwLDE4Mi44MDEgMjA5LjE5NiwxODIuOTE5IDIwOS42OTQgQyAxODMuMDM3IDIxMC4xOTIsMTgzLjY5NyAyMTIuMTMwLDE4NC4zODYgMjE0LjAwMCBDIDE4NS4wNzQgMjE1Ljg3MCwxODUuOTc2IDIxOC40MTUsMTg2LjM4OCAyMTkuNjU3IEMgMTg2LjgwMSAyMjAuODk4LDE4Ny4zMTEgMjIyLjI0OCwxODcuNTIxIDIyMi42NTcgQyAxODcuNzMxIDIyMy4wNjUsMTg4LjIyMCAyMjQuMzkwLDE4OC42MDggMjI1LjYwMCBDIDE4OC45OTUgMjI2LjgxMCwxODkuNDY3IDIyNy45NzEsMTg5LjY1NiAyMjguMTgwIEMgMTg5Ljg0NSAyMjguMzg5LDE5MC4wMDAgMjI4Ljk2MywxOTAuMDAwIDIyOS40NTYgQyAxOTAuMDAwIDIyOS45NDksMTkwLjE2MCAyMzAuNDUxLDE5MC4zNTUgMjMwLjU3MiBDIDE5MC44NDcgMjMwLjg3NiwxOTEuMjcwIDIzMy4zNTMsMTkwLjk2NSAyMzQuMTQ2IEMgMTkwLjc1OCAyMzQuNjg1LDE5MC4wNzIgMjM0LjgwMCwxODcuMDQ4IDIzNC44MDAgTCAxODMuMzgyIDIzNC44MDAgMTgyLjcyMSAyMzMuNTAwIEMgMTgxLjc5MyAyMzEuNjc2LDE3OC4wMDAgMjIxLjAxMSwxNzguMDAwIDIyMC4yMjcgQyAxNzguMDAwIDIxOC45NzIsMTc2LjA2OSAyMTguNzg3LDE2NC4xMjEgMjE4Ljg5NCBMIDE1Mi4zMjUgMjE5LjAwMCAxNTEuNzQ1IDIyMC42MDAgQyAxNTEuNDI2IDIyMS40ODAsMTUwLjg4MyAyMjMuMTAwLDE1MC41MzcgMjI0LjIwMCBDIDE1MC4xOTIgMjI1LjMwMCwxNDkuNTc5IDIyNy4wMjMsMTQ5LjE3NCAyMjguMDMwIEMgMTQ4Ljc2OSAyMjkuMDM2LDE0OC4xNDAgMjMwLjc0NiwxNDcuNzc2IDIzMS44MzAgQyAxNDYuNzcxIDIzNC44MTcsMTQ2LjcyNCAyMzQuODQ0LDE0Mi44MzkgMjM0LjcxNSBDIDEzOS41MzIgMjM0LjYwNCwxMzkuMzk1IDIzNC41NjIsMTM5LjI2MiAyMzMuNjIxIEMgMTM5LjEzMCAyMzIuNjg3LDEzOS44NDAgMjI5Ljg0NSwxNDAuNDE3IDIyOS4wMDAgQyAxNDAuNTY3IDIyOC43ODAsMTQxLjAyMSAyMjcuNTIwLDE0MS40MjYgMjI2LjIwMCBDIDE0MS44MzEgMjI0Ljg4MCwxNDIuMzk1IDIyMy4zNTAsMTQyLjY3OSAyMjIuODAwIEMgMTQyLjk2MyAyMjIuMjUwLDE0My4xOTYgMjIxLjU3MywxNDMuMTk4IDIyMS4yOTUgQyAxNDMuMTk5IDIyMS4wMTcsMTQzLjM2OSAyMjAuNDc3LDE0My41NzUgMjIwLjA5NSBDIDE0NC4yMTcgMjE4LjkwNywxNDYuMDAwIDIxMy44MTUsMTQ2LjAwMCAyMTMuMTcyIEMgMTQ2LjAwMCAyMTIuODM1LDE0Ni4xNTggMjEyLjM4OSwxNDYuMzUxIDIxMi4xODAgQyAxNDYuNTQ0IDIxMS45NzEsMTQ3LjA3OCAyMTAuNzIwLDE0Ny41MzkgMjA5LjQwMCBDIDE0Ny45OTkgMjA4LjA4MCwxNDguOTM3IDIwNS40NzAsMTQ5LjYyMSAyMDMuNjAwIEMgMTUwLjMwNiAyMDEuNzMwLDE1MC45NjMgMTk5Ljc5MiwxNTEuMDgxIDE5OS4yOTQgQyAxNTEuMTk5IDE5OC43OTYsMTUxLjQ1NCAxOTguMjkwLDE1MS42NDggMTk4LjE3MCBDIDE1MS44NDEgMTk4LjA1MSwxNTIuMDAwIDE5Ny42MTUsMTUyLjAwMCAxOTcuMjAzIEMgMTUyLjAwMCAxOTYuNzkwLDE1Mi40MjQgMTk1LjQwNiwxNTIuOTQxIDE5NC4xMjYgQyAxNTMuNDU5IDE5Mi44NDcsMTU0LjIwMCAxOTAuOTAwLDE1NC41ODggMTg5LjgwMCBDIDE1NC45NzYgMTg4LjcwMCwxNTUuODI2IDE4Ni4zNjAsMTU2LjQ3NiAxODQuNjAwIEMgMTU3LjEyNiAxODIuODQwLDE1Ny45MzMgMTgwLjU5MCwxNTguMjY5IDE3OS42MDAgQyAxNTkuMTg3IDE3Ni44OTQsMTYwLjA5NSAxNzUuMDU2LDE2MC43ODMgMTc0LjUxMyBDIDE2MS41NjMgMTczLjg5NiwxNjguMTQ1IDE3My44MzUsMTY5LjI2MyAxNzQuNDM0IE0yOTUuNDIwIDE3NS4zODcgQyAyOTYuMTU4IDE3Ny4xNTMsMjk2LjE1MiAxNzguMTQ2LDI5NS4zOTMgMTc5LjYxNCBMIDI5NC43ODYgMTgwLjc4OCAyODIuODkzIDE4MC44OTQgTCAyNzEuMDAwIDE4MS4wMDAgMjcxLjAwMCAxOTAuMDAwIEwgMjcxLjAwMCAxOTkuMDAwIDI4MS4xMzMgMTk5LjIwMCBDIDI5Mi42NTcgMTk5LjQyNywyOTIuNDAwIDE5OS4zNDUsMjkyLjQwMCAyMDIuODAwIEMgMjkyLjQwMCAyMDYuMDgxLDI5Mi43NDUgMjA1Ljk4MCwyODEuMjAwIDIwNi4wOTcgTCAyNzEuMDAwIDIwNi4yMDAgMjcwLjg5NCAyMTcuMTAwIEwgMjcwLjc4NyAyMjguMDAwIDI4Mi42OTQgMjI4LjAxMyBDIDI5Ni43NjkgMjI4LjAyOCwyOTYuMDk0IDIyNy44MzIsMjk1LjkxOSAyMzEuODU4IEwgMjk1LjgwMCAyMzQuNjAwIDI3OS44MDAgMjM0LjcwOSBDIDI2My44ODcgMjM0LjgxOCwyNjMuNzk2IDIzNC44MTMsMjYzLjEwMCAyMzMuOTY1IEMgMjYxLjkxMCAyMzIuNTE0LDI2Mi4wMzMgMTc2LjU3NSwyNjMuMjI5IDE3NS4wNTQgTCAyNjQuMDU4IDE3NC4wMDAgMjc5LjQ0OSAxNzQuMDAwIEwgMjk0Ljg0MSAxNzQuMDAwIDI5NS40MjAgMTc1LjM4NyBNMTYzLjY0NCAxODUuNDU2IEMgMTYzLjE1MyAxODYuOTY1LDE2Mi42MDcgMTg4LjU2MCwxNjIuNDMxIDE4OS4wMDAgQyAxNjIuMjU1IDE4OS40NDAsMTYxLjg4NSAxOTAuNTIwLDE2MS42MDkgMTkxLjQwMCBDIDE2MS4zMzQgMTkyLjI4MCwxNjAuODg4IDE5My41NDAsMTYwLjYyMCAxOTQuMjAwIEMgMTU5Ljk2MCAxOTUuODIyLDE1OS4yNzMgMTk3Ljc5OSwxNTguNTM0IDIwMC4yMDAgQyAxNTguMTk1IDIwMS4zMDAsMTU3LjY3NyAyMDIuODMwLDE1Ny4zODMgMjAzLjYwMCBDIDE1Ny4wODkgMjA0LjM3MCwxNTYuNjM0IDIwNS43MjAsMTU2LjM3MiAyMDYuNjAwIEMgMTU2LjExMCAyMDcuNDgwLDE1NS42NTkgMjA4LjgzMCwxNTUuMzcxIDIwOS42MDAgQyAxNTUuMDgyIDIxMC4zNzAsMTU0LjczNCAyMTEuNDA1LDE1NC41OTYgMjExLjkwMCBMIDE1NC4zNDYgMjEyLjgwMCAxNjQuNTczIDIxMi44MDAgQyAxNzMuODgyIDIxMi44MDAsMTc0LjgwMCAyMTIuNzQwLDE3NC44MDAgMjEyLjEyOCBDIDE3NC44MDAgMjExLjQ5OCwxNzQuMjcyIDIwOS42MTIsMTczLjU4NyAyMDcuODAwIEMgMTczLjQyMSAyMDcuMzYwLDE3Mi45ODIgMjA2LjEwMCwxNzIuNjExIDIwNS4wMDAgQyAxNzIuMjQxIDIwMy45MDAsMTcxLjc4MSAyMDIuNjQwLDE3MS41OTAgMjAyLjIwMCBDIDE3MS4zOTkgMjAxLjc2MCwxNzAuMDUxIDE5Ny44MTMsMTY4LjU5NSAxOTMuNDMwIEMgMTY3LjEzOCAxODkuMDQ2LDE2NS42MzAgMTg0Ljg0MSwxNjUuMjQyIDE4NC4wODYgTCAxNjQuNTM4IDE4Mi43MTIgMTYzLjY0NCAxODUuNDU2ICIgc3Ryb2tlPSJub25lIiBmaWxsPSIjMDQwNDA0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L2c+PC9zdmc+`;

const binaryImage = AbstractImage.createBinaryImage(
  AbstractImage.createPoint(0, 0),
  AbstractImage.createPoint(400, 400),
  "svg",
  Buffer.from(svgEncoded, "base64")
);
const abstractImage = AbstractImage.createAbstractImage(
  AbstractImage.createPoint(0, 0),
  AbstractImage.createSize(400, 400),
  AbstractImage.white,
  [binaryImage]
);

const svg = AbstractImage.createReactSvg(abstractImage);

export const test: ExportTestDef = {
  name: "react svg binary",
  abstractImage: svg,
  expectedSerializedJsx: `{"type":"svg","key":null,"ref":null,"props":{"id":"ai_root","width":"400px","height":"400px","viewBox":"0 0 400 400","children":[{"type":"image","key":"0","ref":null,"props":{"x":0,"y":0,"width":400,"height":400,"href":"data:image/svg+xml;base64,${svgEncoded}"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}`,
};
