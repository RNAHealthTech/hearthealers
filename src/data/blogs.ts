import { ReactNode } from 'react';

export interface BlogContent {
    id: string;
    subdomain: 'drjay' | 'dranupam';
    title: string;
    slug: string;
    imageUrl: string;
    description: string;
    tags: string[];
    content: ReactNode[];
}

export const blogs: BlogContent[] = [
    // Dr. Jay Relan Blogs
    {
        id: 'drjay-1',
        subdomain: 'drjay',
        title: 'Understanding Congenital Heart Defects: Early Detection and Treatment',
        slug: 'understanding-congenital-heart-defects-early-detection-treatment',
        imageUrl: 'https://hearthealers.in/images/blog/congenital-heart-defects.webp',
        description: 'Learn about the most common congenital heart defects in children, their symptoms, and modern treatment approaches from Dr. Jay Relan, a leading pediatric cardiologist.',
        tags: ['Congenital Heart Disease', 'Pediatric Cardiology', 'Heart Defects', 'Children Health', 'Early Detection'],
        content: [
            "Congenital heart defects (CHDs) are structural abnormalities of the heart that are present from birth. As one of the most common types of birth defects, affecting approximately 1 in 100 babies, understanding these conditions is crucial for parents and healthcare providers alike.",
            
            "In my practice as a pediatric cardiologist, I've witnessed remarkable advances in both diagnosis and treatment of congenital heart defects. Early detection and intervention can significantly improve outcomes for children born with these conditions.",
            
            "## Common Types of Congenital Heart Defects",
            
            "### Septal Defects (Shunts)",
            "These are holes in the walls that separate the heart's chambers. Atrial Septal Defects (ASD) and Ventricular Septal Defects (VSD) are the most common types. Many small defects close naturally as the child grows, while larger ones may require surgical intervention.",
            
            "### Valvular Obstructions", 
            "These occur when heart valves don't open properly, restricting blood flow. Pulmonary stenosis and aortic stenosis are common examples. Treatment depends on the severity and may include balloon valvuloplasty or surgical repair.",
            
            "### Cyanotic Heart Diseases",
            "These complex conditions cause reduced oxygen in the blood, leading to a blue tint in the skin and lips. Tetralogy of Fallot and Transposition of Great Arteries are examples that require specialized surgical intervention.",
            
            "## Warning Signs to Watch For",
            
            "Parents should be aware of these potential symptoms:",
            "• Difficulty feeding or poor weight gain",
            "• Rapid breathing or shortness of breath", 
            "• Blue coloring around lips, fingers, or toes",
            "• Excessive fatigue during normal activities",
            "• Frequent respiratory infections",
            
            "## Modern Treatment Approaches",
            
            "Treatment for congenital heart defects has evolved dramatically over the past decades. Today, we offer a range of interventions from minimally invasive procedures to complex surgical repairs.",
            
            "Many defects can now be treated through catheter-based interventions, avoiding the need for open-heart surgery. Device closures for ASDs and VSDs, balloon valvuloplasties, and stenting procedures have revolutionized pediatric cardiology.",
            
            "## The Importance of Specialized Care",
            
            "Managing congenital heart defects requires a multidisciplinary approach involving pediatric cardiologists, cardiac surgeons, and specialized nursing staff. Early intervention and ongoing monitoring are key to ensuring the best possible outcomes for children with these conditions.",
            
            "If you suspect your child may have a heart condition, don't hesitate to seek evaluation. With proper diagnosis and treatment, most children with congenital heart defects can lead healthy, active lives."
        ]
    },
    {
        id: 'drjay-2',
        subdomain: 'drjay',
        title: 'Pediatric Arrhythmias: When Young Hearts Beat Differently',
        slug: 'pediatric-arrhythmias-when-young-hearts-beat-differently',
        imageUrl: 'https://hearthealers.in/images/blog/pediatric-arrhythmias.jpg',
        description: 'Explore the world of pediatric arrhythmias, their causes, symptoms, and treatment options. Dr. Jay Relan discusses how irregular heartbeats in children differ from adults.',
        tags: ['Arrhythmias', 'Pediatric Cardiology', 'Heart Rhythm', 'Children Health', 'ECG'],
        content: [
            "Arrhythmias in children can be particularly concerning for parents, as they represent irregularities in the heart's normal rhythm. Unlike adult arrhythmias, pediatric rhythm disorders often have different causes, presentations, and treatment approaches.",
            
            "As a pediatric cardiologist specializing in arrhythmias, I often reassure parents that many rhythm irregularities in children are benign and don't require treatment. However, some can be serious and need immediate medical attention.",
            
            "## Types of Pediatric Arrhythmias",
            
            "### Tachyarrhythmias (Fast Heart Rhythms)",
            "Fast heart rhythms including Supraventricular Tachycardia (SVT), which is the most common sustained arrhythmia in children. SVT can cause heart rates of 150-300 beats per minute and may present with symptoms like irritability, poor feeding, or rapid breathing in infants.",
            
            "### Bradyarrhythmias (Slow Heart Rhythms)",
            "Slow heart rhythms including various degrees of heart block. Complete heart block in newborns may require immediate pacemaker implantation. Sinus bradycardia is often normal in athletic children but may indicate underlying conditions in others.",
            
            "### Premature Beats",
            "Extra heartbeats that occur earlier than expected. Premature Atrial Contractions (PACs) and Premature Ventricular Contractions (PVCs) are usually benign in children with structurally normal hearts.",
            
            "### Long QT Syndrome",
            "A potentially serious condition affecting the heart's electrical system. It can cause dangerous arrhythmias and may present with fainting spells, especially during exercise or emotional stress.",
            
            "## Symptoms in Different Age Groups",
            
            "### Infants and Toddlers",
            "• Poor feeding or difficulty eating",
            "• Excessive irritability or fussiness",
            "• Rapid breathing or breathing difficulties",
            "• Pale or blue coloring around lips",
            "• Lethargy or decreased activity",
            
            "### School-Age Children",
            "• Complaints of heart racing or pounding",
            "• Dizziness or fainting episodes",
            "• Chest pain or discomfort",
            "• Shortness of breath during activities",
            "• Unusual fatigue",
            
            "## Diagnostic Approaches",
            
            "Diagnosing pediatric arrhythmias requires specialized knowledge and equipment. We use various diagnostic tools including 12-lead ECGs, Holter monitors for 24-48 hour rhythm monitoring, and event monitors for intermittent symptoms.",
            
            "Exercise stress testing may be necessary for children with exercise-induced symptoms, while electrophysiology studies are reserved for complex cases requiring detailed rhythm analysis.",
            
            "## Treatment Options",
            
            "### Observation and Monitoring",
            "Many benign arrhythmias in children require only regular monitoring. Simple PACs and PVCs in structurally normal hearts often resolve as children grow.",
            
            "### Medications",
            "When treatment is necessary, we have several pediatric-appropriate medications available. Beta-blockers are commonly used for various arrhythmias, while specific anti-arrhythmic drugs may be needed for complex conditions.",
            
            "### Catheter Ablation",
            "For recurrent SVT or other problematic arrhythmias, catheter ablation offers a potential cure. This minimally invasive procedure has excellent success rates in children and eliminates the need for lifelong medications in many cases.",
            
            "### Device Therapy",
            "Pacemakers may be necessary for children with bradyarrhythmias or heart block. Modern devices are smaller and more sophisticated, allowing children to participate in most normal activities.",
            
            "## Living with Pediatric Arrhythmias",
            
            "Most children with arrhythmias can participate in normal childhood activities with appropriate monitoring and treatment. Sports participation decisions should be made in consultation with a pediatric cardiologist, considering the specific type of arrhythmia and individual circumstances.",
            
            "Regular follow-up is essential to monitor the condition's progression and adjust treatment as needed. With proper care, the vast majority of children with arrhythmias grow up to lead completely normal lives."
        ]
    },
    
    // Dr. Anupam Blogs
    {
        id: 'dranupam-1',
        subdomain: 'dranupam',
        title: 'Device Closure Procedures: Minimally Invasive Heart Defect Repairs',
        slug: 'device-closure-procedures-minimally-invasive-heart-defect-repairs',
        imageUrl: 'https://hearthealers.in/images/blog/device-closure-procedures.png',
        description: 'Discover how modern device closure procedures can treat heart defects without surgery. Dr. Anupam explains ASD, VSD, and PDA closures in detail.',
        tags: ['Device Closure', 'ASD', 'VSD', 'PDA', 'Minimally Invasive', 'Catheter Procedures'],
        content: [
            "Device closure procedures have revolutionized the treatment of congenital heart defects, offering patients a minimally invasive alternative to open-heart surgery. As a pediatric interventional cardiologist, I've witnessed firsthand how these procedures have transformed the lives of countless children and their families.",
            
            "Gone are the days when every heart defect required major surgery. Today, many structural heart problems can be corrected through small incisions using specialized devices, resulting in faster recovery times and better cosmetic outcomes.",
            
            "## What Are Device Closure Procedures?",
            
            "Device closure procedures involve inserting specially designed occluder devices through catheters to seal holes or abnormal connections in the heart. These devices are made from biocompatible materials that integrate with the heart tissue over time, providing permanent closure.",
            
            "The procedure is performed in a cardiac catheterization laboratory under general anesthesia, typically requiring only a small incision in the groin area. Most patients can go home the same day or after an overnight observation.",
            
            "## Atrial Septal Defect (ASD) Closure",
            
            "### Understanding ASDs",
            "Atrial Septal Defects are holes in the wall separating the heart's upper chambers (atria). While small ASDs may close naturally, larger defects can cause problems if left untreated, including right heart enlargement and pulmonary hypertension.",
            
            "### The Closure Procedure",
            "ASD closure is one of the most successful device procedures. Using echocardiographic and fluoroscopic guidance, I carefully position an Amplatzer Septal Occluder across the defect. The device has two discs that sandwich the septum, securely sealing the hole.",
            
            "Success rates exceed 98%, with most patients experiencing immediate improvement in their symptoms. The procedure typically takes 1-2 hours, and patients can return to normal activities within a few days.",
            
            "## Ventricular Septal Defect (VSD) Closure",
            
            "### VSD Challenges and Solutions",
            "Ventricular Septal Defects, holes between the heart's lower chambers, present unique challenges due to their location and the high-pressure environment. Not all VSDs are suitable for device closure, but muscular VSDs and some perimembranous VSDs can be successfully treated.",
            
            "### Procedural Considerations",
            "VSD device closure requires exceptional skill and experience. The procedure involves careful assessment of the defect's size, location, and relationship to surrounding structures. I use specialized VSD occluders designed to conform to the ventricular septum's unique anatomy.",
            
            "Post-procedure monitoring is crucial, as there's a small risk of device-related complications. However, when successful, patients avoid the need for surgical patch closure.",
            
            "## Patent Ductus Arteriosus (PDA) Closure",
            
            "### About PDA",
            "The ductus arteriosus is a normal blood vessel in fetal life that should close after birth. When it remains open (patent), it can cause heart failure if left untreated. PDA closure was one of the first successful device procedures in pediatric cardiology.",
            
            "### The Gold Standard Treatment",
            "PDA device closure is considered the gold standard treatment for most patients. Using coils or specialized PDA occluders, I can seal the ductus arteriosus completely. The procedure has excellent success rates and minimal complications.",
            
            "Small to moderate PDAs can often be closed with coils, while larger defects may require ductal occluders. The choice depends on the PDA's size, shape, and anatomy.",
            
            "## Complex Defects and Fistulas",
            
            "### Aortopulmonary (AP) Window Closure",
            "AP windows are rare but serious defects creating abnormal connections between the aorta and pulmonary artery. Device closure is possible for selected cases, avoiding the need for surgical repair with cardiopulmonary bypass.",
            
            "### Coronary-Cameral Fistulas",
            "These abnormal connections between coronary arteries and heart chambers can cause symptoms and complications. Device closure using coils or plugs is often successful, preserving normal coronary flow while eliminating the fistula.",
            
            "### Pulmonary Arteriovenous Fistulas",
            "These abnormal connections in the lungs can cause cyanosis and other complications. Transcatheter closure using coils or plugs is the preferred treatment, with excellent results in most cases.",
            
            "## Advantages of Device Closure",
            
            "### Minimally Invasive Approach",
            "• No need for chest incision or sternotomy",
            "• Reduced pain and discomfort",
            "• Faster recovery time",
            "• Better cosmetic results",
            "• Lower risk of infection",
            
            "### Reduced Hospital Stay",
            "Most device closure procedures are performed as day-case procedures or require only overnight observation, compared to several days for surgical repair.",
            
            "### Excellent Long-term Outcomes",
            "Studies show that device closure procedures have excellent long-term success rates with minimal complications. The devices are designed to last a lifetime and become incorporated into the heart tissue.",
            
            "## Patient Selection and Evaluation",
            
            "Not every patient is suitable for device closure. Careful evaluation includes detailed echocardiography, sometimes cardiac MRI, and consideration of the patient's age, size, and overall health status.",
            
            "The defect's size, location, and anatomy are crucial factors. Some defects are too large for available devices, while others may be too close to important structures like heart valves.",
            
            "## Future Directions",
            
            "The field of device closure continues to evolve with new devices and techniques. Biodegradable occluders are being developed, and 3D printing technology may soon allow custom-made devices for complex cases.",
            
            "As technology advances, we expect to treat even more complex defects using minimally invasive techniques, further reducing the need for open-heart surgery in pediatric patients."
        ]
    },
    {
        id: 'dranupam-2',
        subdomain: 'dranupam',
        title: 'Balloon Valvuloplasty: Opening Hearts Without Surgery',
        slug: 'balloon-valvuloplasty-opening-hearts-without-surgery',
        imageUrl: 'https://hearthealers.in/images/blog/balloon-valvuloplasty.jpg',
        description: 'Learn about balloon valvuloplasty procedures for treating heart valve stenosis in children. Dr. Anupam explains pulmonary valve, aortic valve treatments, and more.',
        tags: ['Balloon Valvuloplasty', 'Pulmonary Stenosis', 'Aortic Stenosis', 'Heart Valves', 'Catheter Intervention'],
        content: [
            "Balloon valvuloplasty represents one of the most successful interventional cardiology procedures, offering children with heart valve stenosis a non-surgical treatment option. This technique has fundamentally changed how we approach valvular heart disease in pediatric patients.",
            
            "As a pediatric interventional cardiologist, I've performed hundreds of balloon valvuloplasty procedures, witnessing their remarkable ability to restore normal heart function and improve quality of life. The procedure's success lies in its simplicity and effectiveness.",
            
            "## Understanding Valve Stenosis",
            
            "Heart valve stenosis occurs when valve leaflets become thick, stiff, or fused together, restricting blood flow. This can be a congenital condition present from birth or acquired over time. The stenosis creates extra work for the heart and can lead to serious complications if untreated.",
            
            "Different valves can be affected, each presenting unique challenges and treatment considerations. The most common stenotic valves in children are the pulmonary and aortic valves.",
            
            "## Pulmonary Valve Stenosis",
            
            "### The Most Common Indication",
            "Pulmonary valve stenosis is the most frequent indication for balloon valvuloplasty in children. It accounts for 8-12% of all congenital heart defects and often presents as an isolated abnormality.",
            
            "### Symptoms and Presentation",
            "Mild pulmonary stenosis may cause no symptoms, while severe cases can lead to:",
            "• Shortness of breath during exercise",
            "• Fatigue and reduced exercise tolerance",
            "• Chest pain",
            "• Syncope (fainting) in severe cases",
            "• Cyanosis (blue coloring) in critical stenosis",
            
            "### The Procedure",
            "Pulmonary balloon valvuloplasty is performed through a small incision in the groin. I advance a catheter through the venous system to the right heart and position a balloon across the stenotic pulmonary valve. The balloon is then inflated to fracture the fused valve leaflets and relieve the obstruction.",
            
            "The procedure typically takes 1-2 hours and has excellent success rates. Most patients experience immediate improvement in their symptoms and can return to normal activities within days.",
            
            "### Long-term Outcomes",
            "Studies show that successful pulmonary balloon valvuloplasty provides excellent long-term results. The majority of patients remain free from reintervention for decades. Some degree of pulmonary regurgitation (leakage) may occur but is usually well-tolerated.",
            
            "## Aortic Valve Stenosis",
            
            "### A More Complex Challenge",
            "Aortic valve stenosis in children is more complex than pulmonary stenosis due to the high-pressure left heart environment and the valve's critical role in systemic circulation. The condition can be congenital or acquired, with bicuspid aortic valves being the most common congenital variant.",
            
            "### Indications for Intervention",
            "Aortic balloon valvuloplasty is indicated when:",
            "• The pressure gradient across the valve is significantly elevated",
            "• The child develops symptoms",
            "• There's evidence of left heart strain",
            "• The stenosis is critical in newborns",
            
            "### Procedural Considerations",
            "Aortic balloon valvuloplasty requires exceptional skill and experience. The procedure can be performed through either the arterial or venous approach, depending on the patient's anatomy and age.",
            
            "The balloon inflation must be precise to avoid complications. Too aggressive dilation can cause significant aortic regurgitation, while insufficient dilation may not adequately relieve the stenosis.",
            
            "### Outcomes and Limitations",
            "While aortic balloon valvuloplasty can provide excellent short-term relief, the long-term outcomes are more variable than pulmonary valvuloplasty. Some patients may require repeat procedures or eventual surgical intervention.",
            
            "Despite these limitations, the procedure can delay the need for surgery by many years and is particularly valuable in critically ill newborns.",
            
            "## Coarctation of Aorta",
            
            "### Beyond Traditional Valves",
            "Balloon angioplasty for coarctation of the aorta extends the valvuloplasty concept to treat narrowing of the aorta itself. This technique is particularly useful for recurrent coarctation after previous surgical repair.",
            
            "### Native vs. Recurrent Coarctation",
            "While balloon angioplasty can be used for native coarctation, it's most successful for recurrent stenosis after surgical repair. The procedure involves inflating a balloon across the narrowed segment to stretch the vessel and improve blood flow.",
            
            "### Stent Implantation",
            "In older children and adolescents, balloon angioplasty may be combined with stent implantation for better long-term results. The stent provides structural support to prevent re-narrowing.",
            
            "## Balloon Atrial Septostomy",
            
            "### A Life-Saving Procedure",
            "Balloon atrial septostomy is a specialized procedure used primarily in newborns with transposition of the great arteries or other conditions requiring improved mixing of oxygenated and deoxygenated blood.",
            
            "### The Rashkind Procedure",
            "Named after Dr. William Rashkind, this procedure involves creating or enlarging a communication between the heart's upper chambers. A balloon catheter is used to tear the atrial septum, allowing better blood mixing.",
            
            "### Critical Timing",
            "This procedure is often performed as an emergency in critically ill newborns. It can be life-saving, providing time for the infant to grow before definitive surgical repair.",
            
            "## Neonatal and Pediatric Considerations",
            
            "### Size Matters",
            "Performing balloon procedures in neonates and small infants requires specialized equipment and expertise. The catheters and balloons must be appropriately sized for tiny hearts and vessels.",
            
            "### Anesthesia and Monitoring",
            "Pediatric patients require specialized anesthesia care and monitoring during procedures. The cardiac catheterization laboratory must be equipped with pediatric-specific equipment and staffed by experienced pediatric teams.",
            
            "### Family-Centered Care",
            "Treating children requires a family-centered approach. Parents need clear explanations of the procedure, realistic expectations, and ongoing support throughout the treatment process.",
            
            "## Complications and Risk Management",
            
            "### Potential Complications",
            "While balloon valvuloplasty is generally safe, potential complications include:",
            "• Valve regurgitation (leakage)",
            "• Vascular injury",
            "• Arrhythmias",
            "• Balloon rupture",
            "• Need for emergency surgery",
            
            "### Risk Minimization",
            "Careful patient selection, appropriate balloon sizing, and experienced operators minimize these risks. Pre-procedure imaging and planning are crucial for optimal outcomes.",
            
            "## Future Developments",
            
            "The field continues to evolve with new balloon technologies, including cutting balloons for calcified valves and drug-coated balloons to prevent restenosis. These innovations promise even better outcomes for pediatric patients with valvular heart disease.",
            
            "Balloon valvuloplasty remains one of the most rewarding procedures in pediatric cardiology, offering children the chance for normal heart function without the need for open-heart surgery."
        ]
    }
];