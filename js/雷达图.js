option = {
    title: {
        text: '�����״�ͼ'

    },

    tooltip: {},
    legend: {

        data: ['Ԥ����䣨Allocated Budget��', 'ʵ�ʿ�����Actual Spending��']
    },
    backgroundColor:'#000',//���״���ı���ɫ
    radar: {
        splitArea: {//�����ָ�����
            areaStyle: {
                color: ['#A7D282', '#FFF57F', '#FFF57F', '#EF856F','#A7D282']//���ﵽ��˳������������ɫ
            }
        },
        // shape: 'circle',
        indicator: [
            { name: '���ۣ�sales��', max: 6500},
            { name: '����Administration��', max: 16000},
            { name: '��Ϣ������Information Techology��', max: 30000},
            { name: '�ͷ���Customer Support��', max: 38000},
            { name: '�з���Development��', max: 52000},
            { name: '�г���Marketing��', max: 25000}
        ]
    },
    series: [{
        symbolSize: 5, //�յ�Ĵ�С
        symbol: 'circle',//�յ����ʽ  'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        itemStyle:{
            normal:{
                color:'blue'//�յ����ɫ
            },

        },
        name: 'Ԥ�� vs ������Budget vs spending��',
        type: 'radar',
        lineStyle: {normal: {color:'#005AAF',width:4}},//������ʽ
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : 'Ԥ����䣨Allocated Budget��',

            },
            {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : 'ʵ�ʿ�����Actual Spending��'
            }

        ],



    }]
};