import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
export const StepsBox = ({ stepsList }) => {
    const { Step } = Steps;
    function kindOf(n) {
        return Object.prototype.toString.call(n).slice(8, -1)
    }

    return (
        <Steps>
            {
                stepsList.map((node, index) => {
                    return <Step status={node.status} title={node.name} icon={node.icon} key={`i${index}_${node.name}`} style={{margin:"30px 0"}}/>
                })
            }
        </Steps>
    )
}